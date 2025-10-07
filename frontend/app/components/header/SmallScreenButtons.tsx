import { cn } from "~/lib/utils";
import MobileNavigationSheet from "~/components/MobileNavigationSheet";
import { useOptionalUser } from "~/utils";
import ButtonLink from "~/components/ButtonLink";
import { Send } from "lucide-react";

interface SmallScreenButtonsProps {
  className?: string;
}

export default function SmallScreenButtons({
  className,
}: SmallScreenButtonsProps) {
  const user = useOptionalUser();

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {user ? (
        <ButtonLink variant="primary-foreground-outline" to="/requests">
          <Send />
          Requests
        </ButtonLink>
      ) : (
        <ButtonLink variant="primary-foreground-outline" to="/signup">
          Join
        </ButtonLink>
      )}
      <MobileNavigationSheet triggerClassName="md:hidden" />
    </div>
  );
}
