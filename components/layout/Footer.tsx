export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg-primary py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-technical text-sm text-text-secondary">mili.dev</span>
          <span className="text-text-muted text-xs">© 2026</span>
        </div>

        <div className="flex items-center gap-6 font-technical text-xs">
          <a
            href="mailto:milagrosmaza.tech@gmail.com"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/milagros-maza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MiliMaza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
