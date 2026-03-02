import { MessageCircle, Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-bold text-primary tracking-widest">MINEPLOW</p>
        <p className="text-sm text-muted-foreground mt-1">© 2026 Mineplow. All rights reserved.</p>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://mineplow.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Globe size={16} />
          mineplow.net
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Discord"
        >
          <MessageCircle size={16} />
          Discord
        </a>
      </div>

      <p className="text-xs text-muted-foreground">Designed by Mineplow Team</p>
    </div>
  </footer>
);

export default Footer;
