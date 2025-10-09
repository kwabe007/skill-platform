import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Cross, LogIn, LogOut, Menu, Send, User, X } from "lucide-react";
import {
  Form,
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router";
import Text from "~/components/Text";
import { PLATFORM_NAME, useOptionalUser } from "~/utils";
import LogOutButton from "~/components/LogOutButton";
import { cn } from "~/lib/utils";
import ButtonLink from "~/components/ButtonLink";
import { useEffect, useState } from "react";

interface MobileNavigationSheetProps {
  triggerClassName?: string;
}

export default function MobileNavigationSheet({
  triggerClassName,
}: MobileNavigationSheetProps) {
  const [open, setOpen] = useState(false);
  const user = useOptionalUser();

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [user, location]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={cn(triggerClassName)}>
        <Button
          variant="outline"
          className="text-white border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] border-l-0 [&>button:first-of-type]:hidden">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-0">
            <SheetTitle>
              <div className="flex items-center bg-gradient-hero h-36 p-8">
                <Text variant="h3" className="text-white">
                  {PLATFORM_NAME}
                </Text>
              </div>
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="primary-foreground-ghost"
                className="absolute top-2 right-2"
              >
                <X />
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className="grow flex flex-col gap-3 flex-1 border-l p-8">
            {user ? (
              <>
                <div className="mb-4 p-4 rounded-lg border border-border/50 space-y-1">
                  <div className="text-xs text-muted-foreground">
                    Signed in as {user.fullName}
                  </div>
                  <div className="text-sm font-medium truncate">
                    {user.email}
                  </div>
                </div>

                <Link to="/edit-profile" className="w-full group">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Profile</span>
                  </Button>
                </Link>

                <Link to="/requests" className="w-full group">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Requests</span>
                  </Button>
                </Link>

                <Form action="/logout" method="POST" className="mt-auto group">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <LogOut className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Log out</span>
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <ButtonLink
                  variant="default"
                  className="h-12 bg-gradient-primary text-base mb-4"
                  to="signup"
                >
                  Join
                </ButtonLink>
                <Link to="/login" className="w-full group">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <LogIn className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Sign In</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
