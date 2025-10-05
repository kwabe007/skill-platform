import type { ConnectionRequest, Skill, User } from "@payload-types";

type Paginated<T> = {
  docs: T[];
  hasNextPage: boolean;
  totalDocs?: number;
};

/**
 * User1 represents a User document from the Payload CMS populated with depth = 1
 */
export type User1 = Omit<User, "offeredSkills" | "neededSkills"> & {
  offeredSkills: Skill0[];
  neededSkills: Skill0[];
};

/**
 * User0 represents a User document from the Payload CMS populated with depth = 0
 */
export type User0 = Omit<User, "offeredSkills" | "neededSkills"> & {
  offeredSkills: number[];
  neededSkills: number[];
};

export type PublicUser0 = Pick<
  User0,
  "id" | "fullName" | "company" | "offeredSkills" | "neededSkills"
>;

export type PublicUser1 = Pick<
  User1,
  "id" | "fullName" | "company" | "offeredSkills" | "neededSkills"
>;

/**
 * Skill0 represents a Skill document from the Payload CMS populated with depth = 0
 */
export type Skill0 = Omit<Skill, "offeredUsers" | "neededUsers"> & {
  offeredUsers: Paginated<number>;
  neededUsers: Paginated<number>;
};

/**
 * Skill1 represents a Skill document from the Payload CMS populated with depth = 1
 */
export type Skill1 = Omit<Skill, "offeredUsers" | "neededUsers"> & {
  offeredUsers: Paginated<User0>;
  neededUsers: Paginated<User0>;
};

/**
 * Skill2 represents a Skill document from the Payload CMS populated with depth = 2
 */
export type Skill2 = Omit<Skill, "offeredUsers" | "neededUsers"> & {
  offeredUsers: Paginated<User1>;
  neededUsers: Paginated<User1>;
};

export type PublicSkill1 = Omit<Skill1, "offeredUsers" | "neededUsers"> & {
  offeredUsers: Paginated<PublicUser0>;
  neededUsers: Paginated<PublicUser0>;
};

export type PublicSkill2 = Omit<Skill1, "offeredUsers" | "neededUsers"> & {
  offeredUsers: Paginated<PublicUser1>;
  neededUsers: Paginated<PublicUser1>;
};

/**
 * ConnectionRequest1 represents a ConnectionRequest document from the Payload CMS populated with depth = 1
 */
export type ConnectionRequest1 = Omit<
  ConnectionRequest,
  "sender" | "receiver"
> & { sender: User0; receiver: User0 };

/**
 * PublicConnectionRequest1 represents a ConnectionRequest document from the Payload CMS populated with depth = 1 where
 * its fields have been filtered to only keep the ones that are considered public. Email can be kept on the sender
 * because the sender's email address will already be disclosed from the automatic mail on connection request creation.
 */
export type PublicConnectionRequest1 = Omit<
  ConnectionRequest,
  "sender" | "receiver"
> & {
  sender: PublicUser0 & { email: string };
  receiver: PublicUser0;
};
