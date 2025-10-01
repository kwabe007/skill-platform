import type { Skill, User } from "@payload-types";

/**
 * User1 represents a User document from the Payload CMS populated with depth = 1
 */
export type User1 = User & { offeredSkills?: Skill[]; neededSkills?: Skill[] };

/**
 * User0 represents a User document from the Payload CMS populated with depth = 0
 */
export type User0 = Omit<User, "offeredSkills" | "neededSkills"> & {
  offeredSkills?: number[];
  neededSkills?: number[];
};

export type User0Public = Pick<
  User0,
  "fullName" | "company" | "offeredSkills" | "neededSkills"
>;

export type Skill1Public = Omit<Skill, "offeredUsers" | "neededUsers"> & {
  offeredUsers?: Paginated<User0Public>;
  neededUsers?: Paginated<User0Public>;
};

type Paginated<T> = {
  docs?: T[];
  hasNextPage?: boolean;
  totalDocs?: number;
};
