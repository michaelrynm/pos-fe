import { DollarSign, ArrowUp } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="px-4 sm:px-6 mt-4 sm:mt-5">
      {/* Heading */}
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
        Welcome, Admin
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
        A quick <strong className="text-black">Snapshot</strong> of your
        business
      </p>

      {/* Cards grid: 1 col mobile → 2 col tablet → 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-4 sm:mt-5">
        {Array.from([1, 2, 3, 4]).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#092C4C] text-white px-4 sm:px-5 py-5 sm:py-6 rounded-md"
          >
            <div className="bg-[#E9EBEB] p-2 text-[#5E503F] rounded-lg shrink-0">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-sm sm:text-base lg:text-lg font-medium truncate">
                Revenue
              </p>
              <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                <p className="font-semibold text-sm sm:text-base truncate">
                  IDR 30.500.000
                </p>
                <div className="bg-green-100 flex items-center w-fit rounded-md gap-0.5 px-1.5 py-0.5 text-green-700 font-semibold text-xs shrink-0">
                  <ArrowUp className="w-3 h-3" />
                  <p>+22%</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
