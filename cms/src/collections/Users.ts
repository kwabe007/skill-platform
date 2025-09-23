import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: {
    verify: true,
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
