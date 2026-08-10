import { Link } from 'react-router-dom';
import { home } from 'virtual:content';

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-[1fr_auto] items-center gap-6 border-t border-border py-7">
          <p className="text-xs text-muted-foreground">{home.footer.copyright}</p>
          <nav aria-label="Footer navigation">
            <Link
              to="/"
              className="relative text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
            >
              {home.footer.link}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
