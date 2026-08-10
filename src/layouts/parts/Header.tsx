import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          to="/"
          className="group flex min-w-0 shrink items-center gap-3 text-sm font-medium tracking-[-0.01em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          aria-label="Hello World home"
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center border border-foreground text-[10px] leading-none">HW</span>
          <span className="whitespace-nowrap">Hello World</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center">
          <Link
            to="/"
            className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
          >
            Welcome
          </Link>
        </nav>
      </div>
    </header>
  );
}
