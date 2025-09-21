import skillMockData from "./SkillDiscoveryMock.json";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function SkillDiscovery() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {skillMockData.map((skillData) => (
        <Card
          key={skillData.name}
          className="cursor-pointer hover:shadow-card transition-smooth border hover:border-primary/20"
        >
          <CardContent className="p-4 text-center">
            <h4 className="font-medium text-sm mb-2">{skillData.name}</h4>
            <div className="flex justify-center gap-2 text-xs text-muted-foreground">
              <span>{skillData.offers} offer</span>
              <span>•</span>
              <span>{skillData.needs} need</span>
            </div>
            <Badge variant="secondary" className="mt-2 text-xs">
              {skillData.startups} startup{skillData.startups !== 1 ? "s" : ""}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
