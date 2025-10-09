import { CollectionConfig, Forbidden, getPayload, Where } from "payload";
import { getDefaultAccess } from "@/collections/access-control";
import config from "@payload-config";
import { render } from "@react-email/components";
import ConnectionRequestEmail from "@/emails/ConnectionRequestEmail";
import { env } from "@/env";
import { buildUrl } from "@/utils";
import { User } from "@/payload-types";

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
      // TODO: data.sendEmail gets set to false when api request did not supply a value. Possible Payload issue.
      async ({ req, data, operation, doc }) => {
        if (operation === "create") {
          // TODO: Figure out why doc.receiver is a number when creating a connection request from admin panel. Possible Payload issue.
          let receiver: User;

          if (typeof doc.receiver === "number") {
            receiver = await req.payload.findByID({
              req,
              collection: "users",
              id: doc.receiver,
            });
          } else {
            receiver = doc.receiver;
          }

          if (data.sendEmail === true) {
            const emailHtml = await render(
              ConnectionRequestEmail({
                senderCompanyName: doc.sender.company.name,
                senderFullName: doc.sender.fullName,
                senderEmail: doc.sender.email,
                sencerProfileUrl: `${buildUrl(env.FRONTEND_BASE_URL, "edit-profile")}`,
                message: doc.message,
              }),
            );
            await req.payload.sendEmail({
              to: [receiver.email],
              subject: `${doc.sender.company.name} wants to connect with you`,
              html: emailHtml,
              replyTo: doc.sender.email,
            });
          }
          // TODO: File an issue. Seems to be a bug where if you don't use the `req` argument (i.e. no transaction), payload hangs.
          // See https://www.reddit.com/r/PayloadCMS/comments/1bngu3a/hooks_stalling_when_trying_to_create_a_relation/
          await req.payload.update({
            req,
            collection: "users",
            where: {
              id: { equals: receiver.id },
            },
            data: {
              unreadRequests: true,
            },
          });
        }
        return data;
      },
    ],
  },
  // TODO: Add hook to prevent sender and receiver being the same
};
