import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function News() {
  return (
    <div className="px-24">
      <p className="font-semibold text-4xl mb-10">Our Latest News</p>

      <div className="grid grid-cols-2">
        <div className="flex gap-4 items-stretch max-w-lg">
          <div className="relative w-72 h-full">
            <Image
              src="https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="product image"
              fill
              className="object-cover rounded-xl aspect-video"
            />
          </div>
          {/* <img src="" alt="" /> */}
          <div>
            <p className="font-semibold">
              Indonesian Coffee Exports Reach IDR 16.44 Trillion
            </p>
            <div className="flex justify-between items-center flex-wrap mt-2">
              <p className="text-[#818181]">Suara.com</p>
              <p className="text-[#818181]">18 jul</p>
            </div>
            <Button
              className="mt-5 bg-white rounded-full px-3 py-5"
              variant={"outline"}
            >
              Read More
            </Button>
          </div>
        </div>

        <div className="flex gap-4 items-stretch max-w-lg">
          <div className="relative w-72 h-full">
            <Image
              src="https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="product image"
              fill
              className="object-cover rounded-xl aspect-video"
            />
          </div>
          {/* <img src="" alt="" /> */}
          <div>
            <p className="font-semibold">
              Indonesian Coffee Exports Reach IDR 16.44 Trillion
            </p>
            <div className="flex justify-between items-center flex-wrap mt-2">
              <p className="text-[#818181]">Suara.com</p>
              <p className="text-[#818181]">18 jul</p>
            </div>
            <Button
              className="mt-5 bg-white rounded-full px-3 py-5"
              variant={"outline"}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
