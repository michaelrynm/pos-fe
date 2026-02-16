import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-24 pt-24 bg-[#2B2B2B]">
      <div className="flex items-center justify-between text-white">
        <div>
          <p>for logo</p>
        </div>

        <div className="flex items-center gap-10">
          <div className="space-y-5">
            <p className="font-medium ">Shop</p>
            <p>Blog</p>
            <p>Product</p>
            <p>Booking</p>
          </div>

          <div className="space-y-5">
            <p className="font-medium">Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>

          <div className="space-y-5">
            <p className="font-medium">Service</p>
            <p>Sent with Courier</p>
            <p>Drive Thru</p>
            <p>In Place</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10" />

      <div className="text-white py-5 flex justify-between items-center">
        <p>2023</p>

        <div className="flex items-center gap-3">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
