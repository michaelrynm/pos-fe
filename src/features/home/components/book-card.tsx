import { Button } from "@/components/ui/button";

export default function BookingCard() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 md:py-16">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl sm:rounded-3xl md:rounded-[40px]
          min-h-[220px] sm:min-h-[240px] md:min-h-[260px]
          bg-cover
          bg-center
        "
        style={{ backgroundImage: "url('/home/brandstory-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-12 md:py-16 text-white">
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-medium">
              Request an order for your private party or event?
            </p>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-8 font-light">
              We are open to ordering party events such as weddings,
              celebrations, or other events
            </p>
            <Button className="bg-white font-bold text-black hover:text-white px-4 py-3 sm:px-5 sm:py-5 rounded-2xl mt-6 sm:mt-8 text-sm sm:text-base">
              Booking now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
