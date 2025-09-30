import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";
import type { Skill } from "@payload-types";
import { pluralize } from "~/utils";

interface SkillDiscoveryProps {
  skills: Skill[];
}

export default function SkillDiscovery({ skills }: SkillDiscoveryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
      {skills.map((skill) => {
        const offeredCount = skill.offeredUsers?.docs?.length ?? 0;
        const neededCount = skill.neededUsers?.docs?.length ?? 0;

        return (
          <Link key={skill.name} to={`/startup-offerings/test`}>
            <Card>
              {/* TODO: Add visual feedback box-shadow on hover */}
              <CardContent className="p-4 text-center">
                <h4 className="font-medium text-sm mb-2">{skill.name}</h4>
                <div className="flex justify-center gap-2 text-xs text-muted-foreground">
                  <span>{pluralize(offeredCount, "offer")}</span>
                  <span>•</span>
                  <span>{pluralize(neededCount, "need")}</span>
                </div>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {pluralize(offeredCount + neededCount, "startup")}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
