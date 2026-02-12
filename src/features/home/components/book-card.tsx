import { Button } from "@/components/ui/button";

export default function BookingCard() {
  return (
    <section className="px-6 md:px-24 py-16">
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          min-h-[260px]
          bg-cover
          bg-center
        "
        style={{ backgroundImage: "url('/home/brandstory-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 gap-8 px-24 py-16 text-white">
          <div className="max-w-3xl">
            <p className="text-5xl font-medium">
              Request an order for your private party or event?
            </p>
            <p className="text-3xl mt-8 font-light">
              We are open to ordering party events such as weddings,
              celebrations, or other events
            </p>
            <Button className="bg-white font-bold text-black hover:text-white px-5 py-5 rounded-2xl mt-8">
              Booking now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
