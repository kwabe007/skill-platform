import { CollectionConfig, Forbidden, getPayload, Where } from "payload";
import { getDefaultAccess } from "@/collections/access-control";
import config from "@payload-config";
import htmlEmail from "./htmlEmailMock.json";

export const CONNECTION_REQUESTS_SLUG = "connection-requests";

export const ConnectionRequests: CollectionConfig = {
  slug: CONNECTION_REQUESTS_SLUG,
  // TODO-SECURITY: set access control to only related users, app and admin
  access: getDefaultAccess({
    // Only users who are admins, sender or receiver may read
    read: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin" || user.role === "app") return true;
      const where: Where = {
        or: [{ sender: { equals: user.id } }, { receiver: { equals: user.id } }],
      };
      return where;
    },
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
      admin: {
        // Show field only in creation view
        condition: ({ id }) => !id,
      },
      required: true,
      virtual: true,
    },
  ],
  hooks: {
    beforeChange: [
      /**
       * Set sender to current user when creating new connection request. Admin can choose sender by
       * setting the `sender` prop
       */
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const payload = await getPayload({ config });

          const result = await payload.find({
            collection: CONNECTION_REQUESTS_SLUG,
            where: {
              receiver: { equals: data.receiver },
            },
            sort: "-createdAt",
            limit: 1,
          });

          const latestConnectionRequest = result.docs.at(0);
          if (latestConnectionRequest) {
            const now = new Date();
            const createdAtDate = new Date(latestConnectionRequest.createdAt);
            const diffMs = now.getTime() - createdAtDate.getTime();
            if (diffMs < 1000 * 60 * 60 * 48) {
              throw new Forbidden(
                () =>
                  "Previous request has already been sent to the receiver within the last 48 hours. Please wait before sending a new one.",
              );
            }
          }
        }
        return data;
      },
    ],
    afterChange: [
      /**
       * Send email if sendEmail was set to true in creation.
       */
      // TODO: data.sendEmail gets set to false when api request did not supply a value. Possible Payload issue?
      async ({ data, operation, doc }) => {
        if (operation === "create" && data.sendEmail === true) {
          const payload = await getPayload({ config });
          await payload.sendEmail({
            to: [doc.sender.email],
            subject: `${doc.sender.company.name} wants to connect with you`,
            text: "We should connect.",
            html: htmlEmail,
            replyTo: doc.sender.email,
          });
        }
        return data;
      },
    ],
  },
  // TODO: Add hook to prevent sender and receiver being the same
};
