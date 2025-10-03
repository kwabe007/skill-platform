import { CollectionConfig, ValidationError, Where } from "payload";
import { adminOnly, getDefaultAccess } from "@/collections/access-control";
import { z } from "zod";

export const CONNECTION_REQUESTS_SLUG = "connection-requests";

export const ConnectionRequests: CollectionConfig = {
  slug: CONNECTION_REQUESTS_SLUG,
  // TODO-SECURITY: set access control to only related users, app and admin
  access: getDefaultAccess({
    // Only users who are admins, sender or receiver may read
    read: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      const where: Where = {
        or: [{ sender: { equals: user.id } }, { receiver: { equals: user.id } }],
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
    {
      name: "sendEmail",
      type: "checkbox",
      virtual: true,
      admin: {
        // Show field only in creation view
        condition: ({ id }) => !id,
      },
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      /**
       * Set sender to current user when creating new connection request. Admin can choose sender by
       * setting the `sender` prop
       */
      ({ data, operation, req }) => {
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
      /**
       * Send email if sendEmail is set to true when creating new connection request.
       */
      // TODO: data.sendEmail is always set, even if api request did not supply a value. Possible Payload issue?
      ({ data, operation, req }) => {
        const result = z.boolean().safeParse(data.sendEmail);
        if (result.error) {
          throw new ValidationError({
            collection: CONNECTION_REQUESTS_SLUG,
            errors: result.error.issues.map((issue) => ({
              message: issue.message,
              path: "sendEmail",
            })),
          });
        }
        if (operation === "create" && data.sendEmail === true) {
          console.log("We're gonna send some MAIL");
        }
        return data;
      },
    ],
  },
  // TODO: Add hook to prevent sender and receiver being the same
};
