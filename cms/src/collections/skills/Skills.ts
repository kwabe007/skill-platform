import { CollectionConfig } from "payload";
import { slugify } from "@/collections/skills/skill-utils";
import { addMany } from "@/collections/skills/skill-endpoints";

export const SKILLS_SLUG = "skills" as const;

export const Skills: CollectionConfig = {
  slug: SKILLS_SLUG,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        readOnly: true, // don’t let admins edit manually
      },
    },
    {
      name: "offeredUsers",
      type: "join",
      collection: "users",
      on: "offeredSkills",
      maxDepth: 2,
    },
    {
      name: "neededUsers",
      type: "join",
      collection: "users",
      on: "neededSkills",
      maxDepth: 2,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        if (data?.name) {
          data.slug = slugify(data.name);
        }
        return data;
      },
    ],
  },
  endpoints: [addMany],
};
