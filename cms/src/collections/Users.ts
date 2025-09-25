import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  access: { create: () => true },
  admin: {
    useAsTitle: "email",
  },
  auth: {
    verify: process.env.NODE_ENV === "production",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "skillsOffered",
      type: "relationship",
      relationTo: "skills",
      hasMany: true,
    },
    {
      name: "skillsNeeded",
      type: "relationship",
      relationTo: "skills",
      hasMany: true,
    },
    {
      name: "company",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
  ],
};
