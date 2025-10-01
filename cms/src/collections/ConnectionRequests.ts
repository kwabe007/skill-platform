import { CollectionConfig } from "payload";

export const ConnectionRequests: CollectionConfig = {
  slug: "connection-requests",
  // TODO-SECURITY: set access control to only related users, app and admin
  access: {},
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

  // TODO: Add hook to prevent sender and receiver being the same
};
