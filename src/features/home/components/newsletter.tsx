import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="px-24 mt-44 relative top-10">
      <div className="px-12 py-16 bg-black rounded-4xl">
        <p className="text-white font-semibold text-5xl">Newsletter</p>
        <p className="text-white">
          Subscribe and get 20% off your first purchase
        </p>

        <div className="relative mt-20">
          <Input
            type="text"
            placeholder="Your email..."
            className="rounded-full px-5 py-5 pr-32"
          />

          <Button
            variant="secondary"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-6"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
