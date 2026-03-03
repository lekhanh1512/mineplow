import { MessageCircle, Globe, Facebook, Users, Music2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Left */}
      <div className="text-center md:text-left">
        <p className="font-bold text-primary tracking-widest">MINEPLOW</p>
        <p className="text-sm text-muted-foreground mt-1">
          © 2026 Mineplow. All rights reserved.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-6">

        {/* Website */}
        <a
          href="https://mcplow.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Globe size={16} />
          mcplow.net
        </a>

        {/* Discord */}
        <a
          href="https://discord.gg/RRQFp432"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Discord"
        >
          <MessageCircle size={16} />
          Discord
        </a>

        {/* Facebook Fanpage */}
        <a
          href="https://www.facebook.com/mineplow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Facebook size={16} />
          Fanpage
        </a>

        {/* Facebook Group */}
        <a
          href="https://www.facebook.com/groups/mineplowladay"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Users size={16} />
          Group
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@mineplow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Music2 size={16} />
          TikTok
        </a>

      </div>

      {/* Right */}
      <p className="text-xs text-muted-foreground text-center md:text-right">
        Designed by Mineplow Team
      </p>

    </div>
  </footer>
);

export default Footer;