import type { Skill, User } from "@payload-types";

/**
 * User1 represents a User document from the Payload CMS populated with
 * depth = 1
 */
export type User1 = User & { offeredSkills?: Skill[]; neededSkills?: Skill[] };
