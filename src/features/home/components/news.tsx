import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function News() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
      <p className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
        Our Latest News
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <article className="flex flex-col sm:flex-row gap-4 items-stretch max-w-lg w-full">
          <div className="relative w-full sm:w-48 md:w-56 lg:w-72 h-40 sm:h-auto sm:min-h-[140px] aspect-video sm:aspect-auto shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="product image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-semibold text-base sm:text-lg">
              Indonesian Coffee Exports Reach IDR 16.44 Trillion
            </p>
            <div className="flex justify-between items-center flex-wrap mt-2 gap-1">
              <p className="text-[#818181] text-sm">Suara.com</p>
              <p className="text-[#818181] text-sm">18 jul</p>
            </div>
            <Button
              className="mt-4 sm:mt-5 bg-white rounded-full px-3 py-3 sm:py-5 text-sm sm:text-base w-fit"
              variant={"outline"}
            >
              Read More
            </Button>
          </div>
          
        </article>

        <article className="flex flex-col sm:flex-row gap-4 items-stretch max-w-lg w-full">
          <div className="relative w-full sm:w-48 md:w-56 lg:w-72 h-40 sm:h-auto sm:min-h-[140px] aspect-video sm:aspect-auto shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="product image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-semibold text-base sm:text-lg">
              Indonesian Coffee Exports Reach IDR 16.44 Trillion
            </p>
            <div className="flex justify-between items-center flex-wrap mt-2 gap-1">
              <p className="text-[#818181] text-sm">Suara.com</p>
              <p className="text-[#818181] text-sm">18 jul</p>
            </div>
            <Button
              className="mt-4 sm:mt-5 bg-white rounded-full px-3 py-3 sm:py-5 text-sm sm:text-base w-fit"
              variant={"outline"}
            >
              Read More
            </Button>
          </div>
          
        </article>

        <article className="flex flex-col sm:flex-row gap-4 items-stretch max-w-lg w-full">
          <div className="relative w-full sm:w-48 md:w-56 lg:w-72 h-40 sm:h-auto sm:min-h-[140px] aspect-video sm:aspect-auto shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1524350876685-274059332603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="product image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-semibold text-base sm:text-lg">
              Indonesian Coffee Exports Reach IDR 16.44 Trillion
            </p>
            <div className="flex justify-between items-center flex-wrap mt-2 gap-1">
              <p className="text-[#818181] text-sm">Suara.com</p>
              <p className="text-[#818181] text-sm">18 jul</p>
            </div>
            <Button
              className="mt-4 sm:mt-5 bg-white rounded-full px-3 py-3 sm:py-5 text-sm sm:text-base w-fit"
              variant={"outline"}
            >
              Read More
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
