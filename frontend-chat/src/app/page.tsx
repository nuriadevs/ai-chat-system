import Chat from "@/components/Chat";

/**
 * 
 * This is the main page of the application.
 */
export default function Home() {
  return (
    <section
      className="h-full w-full flex flex-col
                 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                 py-4 sm:py-6 md:py-8 lg:py-12 bg-popover"
      aria-label="Tabla de portales de empleo"
    >
      <Chat />
    </section>
  );
}