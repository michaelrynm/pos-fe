"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Banknote, ArrowUpLeft } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RadialBarChart, RadialBar } from "recharts";

const chartConfig = {
  indoor: { label: "Indoor", color: "#3B82F6" },
  outdoor: { label: "Outdoor", color: "#F97316" },
  terrace: { label: "Terrace", color: "#8B5CF6" },
};

const chartData = [
  { area: "Indoor", count: 5500, fill: "#3B82F6" },
  { area: "Outdoor", count: 2500, fill: "#F97316" },
  { area: "Terrace", count: 1200, fill: "#8B5CF6" },
];

const paymentMethods = [
  {
    icon: <Banknote size={28} color="#3B82F6" />,
    label: "Cash",
    value: "6,972",
  },
  {
    icon: <Banknote size={28} color="#F97316" />,
    label: "QRIS",
    value: "4,210",
  },
  {
    icon: <Banknote size={28} color="#8B5CF6" />,
    label: "Card",
    value: "3,105",
  },
];

export default function InformationCard() {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col">
        {/* HEADER */}
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
            <div className="p-1.5 rounded-md bg-[#E7F0FF] shrink-0">
              <Info size={18} color="blue" />
            </div>
            Overall Information
          </CardTitle>
        </CardHeader>

        <div className="flex-1 px-4 sm:px-6 pb-6 space-y-5">
          {/* Payment Method Distribution */}
          <div>
            <p className="font-medium text-sm sm:text-base">
              Payment Method Distribution
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center bg-[#F9FAFB] px-2 sm:px-4 py-4 sm:py-5 rounded-lg space-y-1.5 border"
                >
                  {method.icon}
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {method.label}
                  </p>
                  <p className="font-semibold text-sm sm:text-base">
                    {method.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Order Volume by Area */}
          <div>
            <p className="font-medium text-sm sm:text-base">
              Order Volume by Area
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-3 gap-4">
              {/* Radial chart — scales with container */}
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] shrink-0">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <RadialBarChart
                    data={chartData}
                    innerRadius={35}
                    outerRadius={90}
                  >
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel nameKey="area" />}
                    />
                    <RadialBar dataKey="count" background />
                  </RadialBarChart>
                </ChartContainer>
              </div>

              {/* Stats */}
              <div className="flex sm:flex-col gap-5 sm:gap-4">
                {/* Indoor */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <p className="text-xl sm:text-2xl font-semibold">5.5K</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Indoor
                  </p>
                  <div className="flex items-center bg-[#3EB780] w-fit px-2 py-0.5 rounded-md">
                    <ArrowUpLeft size={12} color="white" />
                    <p className="text-white text-xs">25%</p>
                  </div>
                </div>

                <Separator
                  orientation="vertical"
                  className="sm:hidden h-12 self-center"
                />
                <Separator className="hidden sm:block" />

                {/* Outdoor */}
                <div className="flex flex-col items-center justify-center space-y-2">
                  <p className="text-xl sm:text-2xl font-semibold">2.5K</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Outdoor
                  </p>
                  <div className="flex items-center bg-[#3EB780] w-fit px-2 py-0.5 rounded-md">
                    <ArrowUpLeft size={12} color="white" />
                    <p className="text-white text-xs">25%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
