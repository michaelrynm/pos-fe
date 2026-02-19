import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 pt-12 sm:pt-16 md:pt-24 bg-[#2B2B2B]">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-white">
        <div>
          <p>for logo</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-0">
          <div className="space-y-3 sm:space-y-5 min-w-28">
            <p className="font-medium">Shop</p>
            <p className="text-sm sm:text-base text-white/90">Blog</p>
            <p className="text-sm sm:text-base text-white/90">Product</p>
            <p className="text-sm sm:text-base text-white/90">Booking</p>
          </div>

          <div className="space-y-3 sm:space-y-5 min-w-28">
            <p className="font-medium">Legal</p>
            <p className="text-sm sm:text-base text-white/90">Terms of Service</p>
            <p className="text-sm sm:text-base text-white/90">Privacy Policy</p>
            <p className="text-sm sm:text-base text-white/90">Cookies Policy</p>
          </div>

          <div className="space-y-3 sm:space-y-5 min-w-28">
            <p className="font-medium">Service</p>
            <p className="text-sm sm:text-base text-white/90">Sent with Courier</p>
            <p className="text-sm sm:text-base text-white/90">Drive Thru</p>
            <p className="text-sm sm:text-base text-white/90">In Place</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 sm:mt-10" />

      <div className="text-white py-4 sm:py-5 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base">
        <p>2023</p>

        <div className="flex items-center gap-3">
          <Facebook className="size-5 sm:size-6" />
          <Instagram className="size-5 sm:size-6" />
        </div>
      </div>
    </div>
  );
}
