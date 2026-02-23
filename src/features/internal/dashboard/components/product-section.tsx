import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box, Calendar } from "lucide-react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import Image from "next/image";
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";

export default function ProductSection() {
  const timeRange = ["Today", "1 Week", "1 Month", "1 Year"];

  const topSellingProducts = [
    {
      name: "Kopi susu gula aren",
      price: 10000,
      sales: 300,
      selling: {
        status: "plus",
        percentage: 25,
      },
    },
    {
      name: "Matcha Latte",
      price: 18000,
      sales: 245,
      selling: {
        status: "plus",
        percentage: 18,
      },
    },
    {
      name: "Es Teh Manis",
      price: 5000,
      sales: 410,
      selling: {
        status: "minus",
        percentage: 8,
      },
    },
    {
      name: "Americano",
      price: 15000,
      sales: 180,
      selling: {
        status: "plus",
        percentage: 32,
      },
    },
    {
      name: "Es Coklat",
      price: 12000,
      sales: 95,
      selling: {
        status: "minus",
        percentage: 5,
      },
    },
    {
      name: "Teh Tarik",
      price: 8000,
      sales: 320,
      selling: {
        status: "plus",
        percentage: 12,
      },
    },
  ];

  return (
    <div className="px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 mt-5 sm:mt-7">
      {Array.from([1, 2, 3]).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="bg-[#FFECF4] p-1 rounded-md">
                    <Box color="magenta" size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-semibold">
                    Top Selling Products
                  </span>
                </div>
                <Combobox items={timeRange} autoHighlight>
                  <ComboboxInput
                    placeholder="Select Time Range"
                    className="text-xs sm:text-sm"
                  >
                    <InputGroupAddon>
                      <Calendar size={14} />
                    </InputGroupAddon>
                  </ComboboxInput>
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {timeRange.map((item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      ))}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-3 sm:gap-4">
              {topSellingProducts.map((product) => (
                <div key={product.name} className="flex items-center gap-3">
                  <div className="shrink-0">
                    <Image
                      alt="products"
                      width={52}
                      height={52}
                      src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
                      className="rounded-sm object-cover aspect-square w-12 h-12 sm:w-14 sm:h-14"
                    />
                  </div>
                  <div className="flex items-center justify-between flex-1 min-w-0">
                    <div className="min-w-0">
                      <p className="font-medium text-sm sm:text-base truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          IDR {product.price.toLocaleString("id-ID")}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {product.sales} Sales
                        </p>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 border w-fit px-2 py-0.5 rounded-sm ml-2 ${
                        product.selling.status === "plus"
                          ? "border-green-400"
                          : "border-red-400"
                      }`}
                    >
                      <p
                        className={`text-xs ${
                          product.selling.status === "plus"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {product.selling.status === "plus" ? "+" : "-"}
                        {product.selling.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
