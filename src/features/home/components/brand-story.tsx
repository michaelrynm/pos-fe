export default function BrandStory() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 md:py-16">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl sm:rounded-3xl md:rounded-[40px]
          min-h-[200px] sm:min-h-[220px] md:min-h-[260px]
          bg-cover
          bg-center
        "
        style={{ backgroundImage: "url('/home/brandstory-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-6 sm:gap-8 px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-16 text-white justify-center">
          {/* Logo Column */}
          <div className="md:col-span-4 flex justify-center md:justify-center">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
              LOGO
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-8 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
              At Damiun Coffee Shop, we take immense pride in crafting each cup
              of coffee with passion and precision. Our skilled baristas curate
              a diverse selection of specialty coffees sourced from the finest
              beans across the globe, ensuring every sip transports you to a
              world of unparalleled taste and bliss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
