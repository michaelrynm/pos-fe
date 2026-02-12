import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[75vh]
        bg-cover
        bg-center
        flex
        items-center
      "
      style={{ backgroundImage: "url('/home/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl pl-20 text-white">
        <p className="text-8xl font-medium leading-tight">LIFE IS NOT BETTER</p>
        <p className="text-5xl font-medium leading-tight">WITHOUT COFFEE</p>

        <Button className="mt-6 bg-white text-black rounded-full p-6 hover:bg-black/70 hover:text-white transition-colors ease-in duration-300">
          Order Now!
        </Button>
      </div>
    </section>
  );
}
