import { Access, FieldAccess } from "payload";

export const adminOnly: FieldAccess = ({ req: { user } }) => {
  return user?.role === "admin";
};

/**
 * Only applicable for user collection.
 * @param user
 */
export const currentUserAppAdmin: Access = ({ req: { user } }) => {
  if (user?.role === "admin" || user?.role === "app") return true;
  return { id: { equals: user?.id } };
};

export const adminOnlyField = {
  create: adminOnly,
  update: adminOnly,
  read: adminOnly,
};
