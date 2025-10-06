import { cn } from "~/lib/utils";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { LogOut } from "lucide-react";

interface LogOutButtonProps {
  className?: string;
}

export default function LogOutButton({ className }: LogOutButtonProps) {
  return (
    <Form className={cn("", className)} method="POST" action="/logout">
      <Button variant="primary-foreground-outline">
        <LogOut />
        Log out
      </Button>
    </Form>
  );
}
