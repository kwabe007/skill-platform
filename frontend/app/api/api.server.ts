import { data } from "react-router";
import type { Skill, User } from "@payload-types";
import { buildUrl } from "~/utils";
import invariant from "tiny-invariant";
import type { EditUserData, LoginData, SignupData } from "~/api/api-schemas";
import type {
  PublicSkill1,
  User0,
  PublicUser0,
  User1,
  Skill1,
  PublicSkill2,
  Skill2,
  PublicUser1,
  Skill0,
} from "~/api/api-types";

invariant(
  process.env.PAYLOAD_BASE_URL,
  "PAYLOAD_BASE_URL environment variable must be set",
);
const BASE_URL = process.env.PAYLOAD_BASE_URL;

type ValidationFieldError = {
  message: string;
  path: string;
};

type ValidationError = {
  name: "ValidationError";
  data: {
    collection?: string;
    errors: ValidationFieldError[];
    global?: string;
    id?: number | string;
  };
  message: string;
};

export async function signUp(signupData: SignupData) {
  const url = buildUrl(BASE_URL, "api/users");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });
  const jsonData = await response.json();
  if ("errors" in jsonData) {
    const error = jsonData.errors[0];
    if (error.name === "ValidationError") {
      const vError = error as ValidationError;
      return {
        error: true as const,
        path: vError.data.errors[0].path,
        message: vError.data.errors[0].message,
      };
    }
    throw data(jsonData, response.status);
  }
  return {
    error: false as const,
    user: jsonData.doc as User,
  };
}

export async function logIn(loginData: LoginData) {
  const url = buildUrl(BASE_URL, "api/users/login");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  const jsonData = await response.json();

  if (response.status >= 400 && response.status < 500) {
    return {
      error: true as const,
      path: jsonData.path as string | undefined,
      message: jsonData.errors[0].message as string,
    };
  }
  if (!response.ok) {
    throw data(jsonData, { status: response.status });
  }

  return {
    error: false as const,
    user: jsonData.user as User,
    token: jsonData.token as string,
    exp: jsonData.exp as number,
  };
}

export async function logOut(req: Request) {
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");
  const url = buildUrl(BASE_URL, "api/users/logout?allSessions=false");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(requestCookie ? { Cookie: requestCookie } : {}),
    },
  });

  const jsonData = await response.json();
  if ("errors" in jsonData) {
    throw data(jsonData, { status: response.status });
  }
}

export async function getCurrentUser(req: Request) {
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");
  const url = buildUrl(BASE_URL, "api/users/me");
  const response = await fetch(url, {
    method: "GET",
    headers: requestCookie ? { Cookie: requestCookie } : undefined,
  });
  const jsonData = await response.json();

  if ("errors" in jsonData) {
    throw data(jsonData, { status: response.status });
  }

  return jsonData.user as User1 | null;
}

export async function verify(token: string) {
  const url = buildUrl(BASE_URL, `api/users/verify/${token}`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await response.json();
  if (!response.ok) {
    throw data(jsonData, { status: response.status });
  }
}

export async function editUser(
  req: Request,
  userId: number,
  editUserData: EditUserData,
) {
  const offeredSkills =
    editUserData.offeredSkills.length > 0
      ? await addManySkills(req, editUserData.offeredSkills)
      : [];

  const neededSkills =
    editUserData.neededSkills.length > 0
      ? await addManySkills(req, editUserData.neededSkills)
      : [];

  const updatedEditUserData = { ...editUserData, offeredSkills, neededSkills };
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");
  const url = buildUrl(BASE_URL, `api/users/${userId}`);
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(requestCookie ? { Cookie: requestCookie } : {}),
    },
    body: JSON.stringify(updatedEditUserData),
  });
  const jsonData = await response.json();
  if (!response.ok) {
    throw data(jsonData, { status: response.status });
  }
  return jsonData.doc as User1;
}

export async function addManySkills(req: Request, skills: string[]) {
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");
  const url = buildUrl(BASE_URL, "api/skills/add-many");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(requestCookie ? { Cookie: requestCookie } : {}),
    },
    body: JSON.stringify({ skills }),
  });
  const jsonData = await response.json();
  if (!response.ok) {
    throw data(jsonData, { status: response.status });
  }
  return jsonData.skills as Skill[];
}

function toPublicUser0(user: User0): PublicUser0 {
  return {
    id: user.id,
    fullName: user.fullName,
    company: user.company,
    offeredSkills: user.offeredSkills,
    neededSkills: user.neededSkills,
  };
}

function toPublicUser1(user: User1): PublicUser1 {
  return {
    id: user.id,
    fullName: user.fullName,
    company: user.company,
    offeredSkills: user.offeredSkills as Skill0[],
    neededSkills: user.neededSkills as Skill0[],
  };
}

function toPublicSkill1(skill: Skill1): PublicSkill1 {
  return {
    ...skill,
    offeredUsers: {
      ...skill.offeredUsers,
      docs: skill.offeredUsers.docs.map(toPublicUser0),
    },
    neededUsers: {
      ...skill.neededUsers,
      docs: skill.neededUsers.docs.map(toPublicUser0),
    },
  };
}

function toPublicSkill2(skill: Skill2): PublicSkill2 {
  return {
    ...skill,
    offeredUsers: {
      ...skill.offeredUsers,
      docs: skill.offeredUsers.docs.map(toPublicUser1),
    },
    neededUsers: {
      ...skill.neededUsers,
      docs: skill.neededUsers.docs.map(toPublicUser1),
    },
  };
}

export async function getSkills(): Promise<PublicSkill1[]> {
  const url = buildUrl(BASE_URL, "api/skills");
  invariant(process.env.PAYLOAD_API_KEY);
  const response = await fetch(url, {
    headers: {
      Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`,
    },
  });
  const jsonData = await response.json();
  if (!response.ok) {
    console.error(
      `Error in getting skills, returning empty array, status: ${response.status}`,
    );
    return [];
  }
  return jsonData.docs.map(toPublicSkill1);
}

export async function getSkill(
  skillSlug: string,
): Promise<PublicSkill2 | null> {
  const url = buildUrl(
    BASE_URL,
    `api/skills?where[slug][equals]=${encodeURIComponent(skillSlug)}&depth=2&limit=1`,
  );
  invariant(process.env.PAYLOAD_API_KEY);
  const response = await fetch(url, {
    headers: {
      Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`,
    },
  });
  const jsonData = await response.json();
  if (!response.ok) {
    throw data(jsonData, {
      status: response.status,
      statusText: "Error retrieving data from CMS",
    });
  }
  return jsonData.docs[0] ? toPublicSkill2(jsonData.docs[0]) : null;
}
