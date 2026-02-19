import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 mt-20 sm:mt-28 md:mt-36 lg:mt-44 relative top-4 sm:top-6 md:top-10 mx-auto">
      <div className="px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 bg-black rounded-2xl sm:rounded-3xl md:rounded-4xl">
        <p className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Newsletter
        </p>
        <p className="text-white text-sm sm:text-base mt-1">
          Subscribe and get 20% off your first purchase
        </p>

        <div className="relative mt-8 sm:mt-12 md:mt-20 flex flex-col sm:flex-row gap-3 sm:gap-0">
          <Input
            type="text"
            placeholder="Your email..."
            className="rounded-full px-4 sm:px-5 py-4 sm:py-5 pr-28 sm:pr-32 flex-1 min-w-0"
          />

          <Button
            variant="secondary"
            className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 rounded-full px-6 py-4 sm:py-5 shrink-0"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
