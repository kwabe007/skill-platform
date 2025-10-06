import { cn } from "~/lib/utils";
import BackButton from "~/components/BackButton";
import Container from "~/components/Container";
import Text from "~/components/Text";
import ButtonLink from "~/components/ButtonLink";
import { LogIn, LogOut, Send, User } from "lucide-react";
import { useOptionalUser } from "~/utils";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import LargeScreenButtons from "~/components/header/LargeScreenButtons";
import MobileNavigationSheet from "~/components/MobileNavigationSheet";

interface DefaultHeaderProps {
  pageTitle?: string;
  pageSubtitle?: string;
  className?: string;
}

export default function DefaultHeader({
  pageTitle,
  pageSubtitle,
  className,
}: DefaultHeaderProps) {
  const user = useOptionalUser();

  return (
    <header
      className={cn("min-h-36 bg-gradient-hero text-white py-8", className)}
    >
      <Container>
        <div className="flex justify-end gap-4">
          <BackButton variant="primary-foreground-ghost" className="mr-auto" />
          <LargeScreenButtons className="hidden md:flex" />
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
        <div className="mt-4">
          {pageTitle && (
            <Text as="h1" variant="h2">
              {pageTitle}
            </Text>
          )}
          {pageSubtitle && <p className="text-white/80 mt-1">{pageSubtitle}</p>}
        </div>
      </Container>
    </header>
  );
}
