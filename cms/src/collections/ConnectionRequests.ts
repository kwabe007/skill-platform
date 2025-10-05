import { CollectionConfig, Where } from "payload";
import { adminOnly, getDefaultAccess } from "@/collections/access-control";
import { getPayload } from "payload";
import config from "@payload-config";
import { sendEmail } from "@/email";
import htmlEmail from "./htmlEmailMock.json";

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
    ],
    afterChange: [
      /**
       * Send email if sendEmail was set to true in creation.
       */
      // TODO: data.sendEmail gets set to false when api request did not supply a value. Possible Payload issue?
      async ({ data, operation, doc }) => {
        if (operation === "create" && data.sendEmail === true) {
          let receiverEmail: string;
          // For some reason sometimes doc.receiver is not populated, so we need to manually fetch
          // the user data. This might be a Payload issue.
          if (typeof doc.receiver === "number") {
            const payload = await getPayload({ config });
            const receiver = await payload.findByID({
              collection: "users",
              id: doc.receiver,
            });
            receiverEmail = receiver.email;
          } else {
            receiverEmail = doc.receiver.email;
          }
          await sendEmail({
            to: [receiverEmail],
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
