import { ModeToggle } from "@/components/ModelToggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-ful backdrop-blur-md 
                       border-b-2 border-border/50 
                       shadow-sm transition-all duration-300 bg-popover"
    >
      <div className="w-full max-w-screen-3xl mx-auto">
        <div
          className="flex items-center justify-between
                        px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                        py-3 sm:py-4 md:py-5"
        >
          {/* Título principal - Adaptativo */}
          <div className="flex-1 flex items-center space-x-2 sm:space-x-5">
            <img
              src="/images/logo.svg"
              alt="logo de la web"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 
                     transition-all duration-300 hover:drop-shadow-lg
                     dark:brightness-110"
            />

            <h1 
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                       font-bold text-left"
              aria-label="Website name"
            >
              <span>Website name</span>
            </h1>
          </div>
          {/* Controles de la derecha */}
          <div
            className="flex items-center space-x-2 sm:space-x-3"
            role="toolbar"
            aria-label="settings controls"
          >
            {/* Toggle de tema */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
