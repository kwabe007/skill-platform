import { cn } from "~/lib/utils";
import Container from "~/components/Container";
import ButtonLink from "~/components/ButtonLink";
import { LogIn, LogOut, Send, User } from "lucide-react";
import { Form, Link } from "react-router";
import { PLATFORM_NAME, useOptionalUser } from "~/utils";
import { Button } from "~/components/ui/button";
import LargeScreenButtons from "~/components/header/LargeScreenButtons";
import MobileNavigationSheet from "~/components/MobileNavigationSheet";

interface TransparentHeaderProps {
  variant?: "default" | "transparent";
  pageTitle?: string;
  className?: string;
}

export default function TransparentHeader({
  variant = "default",
  pageTitle,
  className,
}: TransparentHeaderProps) {
  const user = useOptionalUser();

  return (
    <header
      className={cn(
        "h-[var(--header-height)] z-10",
        variant === "default" && "bg-gradient-primary",
        className,
      )}
    >
      <Container className="h-full flex justify-end items-center gap-4">
        <Link
          className="text-xl text-white font-bold leading-tight mr-auto"
          to="/"
        >
          {PLATFORM_NAME}
        </Link>
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
      </Container>
    </header>
  );
}
