import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonyCard() {
  return (
    <div className="px-4 sm:px-6">
      <div className="flex items-center justify-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          See what{" "}
          <span className="text-[#EC8B1E]">
            others <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            are saying
          </span>
          .
        </p>
      </div>

      <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 mb-10 sm:mb-14 md:mb-16">
        <Carousel
          className="w-full max-w-[18rem] sm:max-w-xl md:max-w-3xl lg:max-w-3xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-16">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 pl-2 md:pl-16"
              >
                <div className="border border-[#D9D9D9] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl min-h-96 sm:h-104 md:h-120 flex flex-col justify-between">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                    "We highly recommend ordering Damiun Coffee Shop for your
                    event, we have tried it and we are satisfied."
                  </p>

                  <div className="flex gap-3 items-center">
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">Katty</p>
                      <p className="text-[#818181] text-sm">Freelance</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
