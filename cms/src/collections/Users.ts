import { CollectionConfig, ValidationError } from "payload";
import invariant from "tiny-invariant";

export const Users: CollectionConfig = {
  slug: "users",
  access: { create: () => true },
  admin: {
    useAsTitle: "email",
  },
  auth: {
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
      name: "fullName",
      type: "text",
      required: true,
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
  },
};
