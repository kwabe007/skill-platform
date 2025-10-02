import { CollectionConfig, ValidationError } from "payload";
import invariant from "tiny-invariant";
import { adminOnly, adminOnlyField, currentUserAppAdmin } from "@/collections/access-control";

// TODO: Create an issue on payload for users being able to set _verified to true via API
export const Users: CollectionConfig = {
  slug: "users",
  access: {
    // TODO-SECURITY: Create user needs to be set to app or admin only
    create: () => true,
    read: currentUserAppAdmin,
    update: currentUserAppAdmin,
    delete: currentUserAppAdmin,
    admin: adminOnly,
    unlock: adminOnly,
    readVersions: adminOnly,
  },
  admin: {
    useAsTitle: "email",
  },
  auth: {
    useAPIKey: true,
    verify: {
      generateEmailHTML: ({ req, token, user }) => {
        invariant(
          process.env.FRONTEND_BASE_URL,
          "FRONTEND_BASE_URL environment variable must be set",
        );
        const baseUrl = process.env.FRONTEND_BASE_URL.replace(/\/$/, "");
        const verificationUrl = `${baseUrl}/verify/${token}`;
        //TODO: Move HTML to a template file
        return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <p>Thanks for signing up. Please verify your email by clicking the button below:</p>
            
            <p>
              <a href="${verificationUrl}" 
                 style="display:inline-block; padding: 6px 15px; 
                        background-color: #4CAF50; color: #fff; 
                        text-decoration: none; border-radius: 5px;">
                Verify Email
              </a>
            </p>
            
            <p>If the button doesn’t work, copy and paste this link into your browser:</p>
            <p><a href="${verificationUrl}">${verificationUrl}</a></p>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />

            <p style="font-size: 0.9em; color: #666;">
              If this wasn’t you, please ignore this email. 
              Your account will not be verified without this step.
            </p>
          </div>`;
      },
    },
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Member", value: "member" },
        { label: "App", value: "app" },
      ],
      required: true,
      access: adminOnlyField,
      defaultValue: "member",
    },
    {
      name: "fullName",
      type: "text",
      required: true,
      access: {
        read: () => true,
      },
    },
    {
      name: "offeredSkills",
      type: "relationship",
      relationTo: "skills",
      hasMany: true,
    },
    {
      name: "neededSkills",
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
          maxLength: 500,
          type: "textarea",
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data: { password } = {} }) => {
        if (!password) {
          return;
        }
        if (password.length < 6) {
          throw new ValidationError({
            collection: "users",
            errors: [{ message: "Password must be at least 6 characters long.", path: "password" }],
          });
        }
      },
    ],
    beforeChange: [
      // Prevent tampering with verification fields
      ({ data, req }) => {
        if (req.user?.role === "admin") return data;

        if ("_verified" in data) {
          delete data._verified;
        }
        if ("_verificationToken" in data) {
          delete data._verificationToken;
        }
        return data;
      },
    ],
  },
};
