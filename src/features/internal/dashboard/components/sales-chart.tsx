"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  desktop: { label: "Dine-in", color: "#E04F16" },
  mobile: { label: "Takeaway", color: "#FBBF24" },
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function SalesChart() {
  return (
    <Card className="h-full">
      <CardHeader className="border-b px-4 sm:px-6">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-0">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FFF6EE] p-2 rounded-md shrink-0">
              <ShoppingCart size={18} color="orange" />
            </div>
            <span className="text-sm sm:text-base font-semibold">Sales Trend</span>
          </div>

          {/* Toggle — scrollable on very small screens */}
          <div className="overflow-x-auto pb-0.5">
            <ToggleGroup type="single" variant="outline" className="w-max">
              {["1D", "1W", "1M", "3M", "6M", "1Y"].map((v) => (
                <ToggleGroupItem
                  key={v}
                  value={v.toLowerCase()}
                  className="text-xs px-2 sm:px-3 data-[state=on]:bg-[#E04F16] data-[state=on]:text-white"
                >
                  {v}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-2 sm:px-4 pt-4">
        <ChartContainer config={chartConfig} className="w-full h-[220px] sm:h-[280px] lg:h-[380px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fontSize: 11 }}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}