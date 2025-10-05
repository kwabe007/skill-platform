import { GlobalConfig } from "payload";
import { getAdminOnlyAccess } from "@/collections/access-control";

export const SETTINGS_SLUG = "settings";

export const Settings: GlobalConfig = {
  slug: SETTINGS_SLUG,
  access: getAdminOnlyAccess(),
  fields: [
    {
      name: "email",
      type: "ui",
      admin: {
        components: {
          Field: "/components/EmailSettingsUI",
        },
      },
    },
  ],
  typescript: {
    interface: "Settings",
  },
};
