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
    <div>
      <div className="flex items-center justify-center">
        <p className="text-5xl font-bold">
          See what{" "}
          <span className="text-[#EC8B1E]">
            others <br /> are saying
          </span>
          .{""}
        </p>
      </div>

      <div className="flex justify-center mt-16 mb-16">
        <Carousel
          className="w-full max-w-[20rem] sm:max-w-xl md:max-w-3xl lg:max-w-3xl"
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
                <div className="border border-[#D9D9D9] p-5 md:p-6 rounded-2xl h-[28rem] md:h-[30rem] flex flex-col justify-between">
                  <p className="text-2xl md:text-3xl leading-relaxed">
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
