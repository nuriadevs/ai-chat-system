import { socialLinks, type SocialLink } from "@/constants/socialLinks";
import { Timestamp } from "@/components/ui/Timestamp"
import { FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      className="bg-popover backdrop-blur-md z-50 border-t-2 shadow-sm"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Contenedor principal del footer */}
      <div className="w-full max-w-screen-3xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Copyright */}
          <span className="text-muted-foreground flex items-center gap-1 text-center md:text-left">
             © <Timestamp /> Made with{" "} 
            <FaHeart className="text-red-500" aria-hidden="true" /> by
            <span className="font-semibold ml-1">Nuria Vázquez.</span>
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-muted-foreground">Follow us:</span>
            {socialLinks.map((link: SocialLink) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (se abre en nueva pestaña)`}
                className="text-sm hover:text-[var(--footer-icon-hover)] focus:outline focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
              >
                <link.icon
                  className="w-[var(--footer-icon-size)] h-[var(--footer-icon-size)]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
