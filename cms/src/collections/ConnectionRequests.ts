import { CollectionConfig, Where } from "payload";
import { adminOnly, getDefaultAccess } from "@/collections/access-control";

export const ConnectionRequests: CollectionConfig = {
  slug: "connection-requests",
  // TODO-SECURITY: set access control to only related users, app and admin
  access: getDefaultAccess({
    // Only users who are admins, sender or receiver may read
    read: ({ req: { user } }) => {
      if (user?.role === "admin") return true;
      const where: Where = {
        or: [{ sender: { equals: user?.id } }, { receiver: { equals: user?.id } }],
      };
      return where;
    },
    update: adminOnly,
    delete: adminOnly,
  }),
  fields: [
    {
      name: "sender",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "receiver",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation, req }) => {
        // Set sender to current user when creating new connection request. Admin can choose sender by
        // setting the `sender` prop.
        if (operation === "create") {
          const user = req.user;
          if (!user) return data;
          if (user.role === "admin") {
            data.sender ??= user.id;
          } else {
            data.sender = user.id;
          }
        }
        return data;
      },
    ],
  },
  // TODO: Add hook to prevent sender and receiver being the same
};
