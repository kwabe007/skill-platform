import { cn } from "~/lib/utils";
import { Heart } from "lucide-react";
import { PLATFORM_NAME } from "~/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-footer text-footer-muted-foreground", className)}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">{PLATFORM_NAME}</h3>
            <p className="text-sm">
              Connecting startups through skill exchange and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className=" hover: transition-colors">
                  Browse Startups
                </a>
              </li>
              <li>
                <a href="/profile" className=" hover: transition-colors">
                  Profile
                </a>
              </li>
              <li>
                <a href="/requests" className=" hover: transition-colors">
                  My Requests
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className=" hover: transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className=" hover: transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className=" hover: transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className=" text-sm">
            © 2025 {PLATFORM_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-1  text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
            for startups
          </div>
        </div>
      </div>
    </footer>
  );
}
