import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh]
        bg-cover
        bg-center
        flex
        items-center
      "
      style={{ backgroundImage: "url('/home/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl w-full px-4 sm:px-8 md:pl-12 lg:pl-20 text-white">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium leading-tight">
          LIFE IS NOT BETTER
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mt-1">
          WITHOUT COFFEE
        </p>

        <Button className="mt-4 sm:mt-6 bg-white text-black rounded-full px-5 py-4 sm:p-6 text-sm sm:text-base hover:bg-black/70 hover:text-white transition-colors ease-in duration-300">
          Order Now!
        </Button>
      </div>
    </section>
  );
}
