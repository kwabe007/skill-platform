import { Access, CollectionConfig, FieldAccess } from "payload";

export const adminOnly: FieldAccess = ({ req: { user } }) => {
  return user?.role === "admin";
};

/**
 * Only applicable for user collection. Grants permission to app, admin and current user.
 * @param user
 */
export const currentUserAppAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (user.role === "admin" || user.role === "app") return true;
  return { id: { equals: user.id } };
};

export const adminOnlyField = {
  create: adminOnly,
  update: adminOnly,
  read: adminOnly,
};

/**
 * Provides a standard access configuration for a Payload CMS collection,
 * restricting common CRUD operations to users with the 'admin' or 'member' role.
 * * All administrative-level operations (admin panel access, document unlock,
 * reading versions) are strictly limited to the 'admin' role.
 * * @param {CollectionConfig["access"]} [overrides] - Optional access configuration object
 * to override or extend the default settings (e.g., to add a custom 'read' function).
 * @returns {CollectionConfig["access"]} The combined access configuration object.
 */
export function getDefaultAccess(
  overrides?: CollectionConfig["access"],
): CollectionConfig["access"] {
  return {
    create: ({ req }) => req.user?.role === "admin" || req.user?.role === "member",
    read: ({ req }) => req.user?.role === "admin" || req.user?.role === "member",
    update: ({ req }) => req.user?.role === "admin" || req.user?.role === "member",
    delete: ({ req }) => req.user?.role === "admin" || req.user?.role === "member",
    admin: adminOnly,
    unlock: adminOnly,
    readVersions: adminOnly,
    ...overrides,
  };
}
