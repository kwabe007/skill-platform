import { Endpoint, ValidationError, ValidationFieldError } from "payload";
import { z } from "zod";
import { normalizeAndAddSlugs } from "@/collections/skills/skill-utils";
import { SKILLS_SLUG } from "@/collections/skills/Skills";

export const addMany: Omit<Endpoint, "root"> = {
  path: "/add-many",
  method: "post",
  handler: async (req) => {
    // Authentication check
    if (!req.user) {
      return Response.json(
        { errors: [{ message: "You are not allowed to perform this action" }] },
        { status: 403 },
      );
    }

    // Input validation
    const jsonData = await req.json?.();

    const dataSchema = z.object({
      skills: z.string().min(1).array(),
    });

    const result = dataSchema.safeParse(jsonData);
    if (!result.success) {
      const errors: ValidationFieldError[] = [];
      result.error.issues.forEach((issue) =>
        errors.push({
          path: issue.path.join("."),
          message: issue.message,
        }),
      );
      throw new ValidationError(
        {
          collection: SKILLS_SLUG,
          errors,
        },
        req.t,
      );
    }

    // Normalize and slugify skill names
    const skills = normalizeAndAddSlugs(result.data.skills);

    // Filter out skills that don't already exist in the database
    const { docs: existingSkills } = await req.payload.find({
      collection: "skills",
      where: { slug: { in: skills.map((skill) => skill.slug) } },
      limit: skills.length,
      pagination: false,
    });
    const existingSkillSlugs = existingSkills.map((skill) => skill.slug);
    const newSkills = skills.filter((skill) => !existingSkillSlugs.includes(skill.slug));

    // Create skills that don't already exist
    const createdSkills = await Promise.all(
      newSkills.map((skill) =>
        req.payload.create({
          collection: "skills",
          // Slug is generated automatically in beforeChange hook
          data: { name: skill.name, slug: "" },
        }),
      ),
    );

    // Return all skills (both existing and created)
    const allSkills = [...existingSkills, ...createdSkills];
    return Response.json({
      skills: allSkills,
    });
  },
};
