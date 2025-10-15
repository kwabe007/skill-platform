import { cn } from "~/lib/utils";
import { Heart } from "lucide-react";
import { PLATFORM_NAME, useEnv } from "~/utils";
import { Button } from "~/components/ui/button";
import ButtonLink from "~/components/ButtonLink";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const env = useEnv();

  return (
    <footer
      className={cn(
        "bg-secondary border-t text-footer-muted-foreground",
        className,
      )}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid [grid-template-areas:'a''b''c'] md:[grid-template-areas:'a_b''-_c'] gap-8">
          <div className="[grid-area:a]">
            <h3 className="font-semibold text-secondary-foreground mb-3">
              {PLATFORM_NAME}
            </h3>
            <p className="text-sm">
              Connecting startups through skill exchange and collaboration.
            </p>
          </div>
          <div className="[grid-area:b]">
            <h4 className="font-medium text-secondary-foreground mb-3">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <ButtonLink variant="text-ghost" className="font-normal" to="#">
                  FAQ
                </ButtonLink>
              </li>
              <li>
                <ButtonLink variant="text-ghost" className="font-normal" to="#">
                  Privacy Policy
                </ButtonLink>
              </li>
            </ul>
          </div>
          {/*          {env.CONTACT_EMAIL && (
            <p className="[grid-area:c] text-sm">
              If you want to get in contact with us, mail us at{" "}
              <Button
                asChild
                variant="text-link"
                className="text-footer-muted-foreground"
              >
                <a href={`mailto:${env.CONTACT_EMAIL}`}>{env.CONTACT_EMAIL}</a>
              </Button>
            </p>
          )}*/}
          <p>
            Fill out our feedback form to help us improve.{" "}
            <Button
              asChild
              variant="text-link"
              className="text-footer-muted-foreground"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1TDrQi5hvPpcnAQmjpk7Ffz2QIh14CPvpxv1BURP7EW5zPQ/viewform?usp=dialog">
                Click here
              </a>
            </Button>
            .
          </p>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className=" text-sm">
            © 2025 {PLATFORM_NAME}. All rights reserved.
          </p>
          <div className="text-sm">
            <div className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
              for startups
              <br />
            </div>
            <div className="mx-auto w-fit lg:w-auto ">
              by{" "}
              <a
                className="text-base font-lexend font-bold"
                rel="noopener"
                href="https://enbrasak.com"
              >
                EnBraSak
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
