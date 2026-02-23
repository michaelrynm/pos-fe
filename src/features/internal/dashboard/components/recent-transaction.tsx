import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flag } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function RecentTransaction() {
  const transactions = [
    {
      orderNumber: "ORD-8821",
      tableNumber: "Table 4",
      customer: "James Whitmore",
      items: 5,
      totalAmount: 124.5,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      orderNumber: "ORD-8820",
      tableNumber: "Table 7",
      customer: "Sari Dewi",
      items: 3,
      totalAmount: 68.0,
      status: "Pending",
      paymentMethod: "Cash",
    },
    {
      orderNumber: "ORD-8819",
      tableNumber: "Table 1",
      customer: "Marcus Tan",
      items: 7,
      totalAmount: 210.75,
      status: "Completed",
      paymentMethod: "QRIS",
    },
    {
      orderNumber: "ORD-8818",
      tableNumber: "Table 9",
      customer: "Priya Nair",
      items: 2,
      totalAmount: 45.0,
      status: "Cancelled",
      paymentMethod: "Debit Card",
    },
    {
      orderNumber: "ORD-8817",
      tableNumber: "Table 3",
      customer: "Luca Ferretti",
      items: 4,
      totalAmount: 97.25,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      orderNumber: "ORD-8816",
      tableNumber: "Table 12",
      customer: "Yuki Tanaka",
      items: 6,
      totalAmount: 163.0,
      status: "In Progress",
      paymentMethod: "QRIS",
    },
  ];

  const statusConfig: Record<string, { label: string; className: string }> = {
    Completed: {
      label: "Completed",
      className:
        "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-50",
    },
    Pending: {
      label: "Pending",
      className:
        "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-50",
    },
    Cancelled: {
      label: "Cancelled",
      className: "bg-red-50 text-red-600 border border-red-200 hover:bg-red-50",
    },
    "In Progress": {
      label: "In Progress",
      className:
        "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-50",
    },
  };

  const paymentIcon: Record<string, string> = {
    "Credit Card": "💳",
    "Debit Card": "🪙",
    Cash: "💵",
    QRIS: "📲",
  };

  return (
    <div className="px-6 mb-7 mt-7">
      <Card className="w-full border border-stone-200 shadow-sm rounded-2xl overflow-hidden">
        <CardHeader className=" border-stone-100 bg-white">
          <CardTitle className="text-base font-semibold text-stone-800">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#FFF0EA] p-2 rounded-xl">
                <Flag size={16} color="#F97316" strokeWidth={2.2} />
              </div>
              Recent Transactions
            </div>
          </CardTitle>
          <CardAction>
            <Button
              variant="link"
              className="text-orange-500 hover:text-orange-600 font-medium text-sm p-0 h-auto"
            >
              View All →
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-stone-50 hover:bg-stone-50 border-b border-stone-100">
                <TableHead className="pl-6 py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider w-[130px]">
                  Order #
                </TableHead>
                <TableHead className="py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Table
                </TableHead>
                <TableHead className="py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Customer
                </TableHead>
                <TableHead className="py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider text-center">
                  Items
                </TableHead>
                <TableHead className="py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider text-right">
                  Amount
                </TableHead>
                <TableHead className="py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="pr-6 py-3.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Payment
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {transactions.map((tx, i) => (
                <TableRow
                  key={tx.orderNumber}
                  className={`border-b border-stone-100 hover:bg-orange-50/40 transition-colors duration-150 ${
                    i % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                  }`}
                >
                  <TableCell className="pl-6 py-4 font-mono text-sm font-semibold text-stone-700">
                    {tx.orderNumber}
                  </TableCell>
                  <TableCell className="py-4 text-sm text-stone-600">
                    {tx.tableNumber}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-200 to-rose-200 flex items-center justify-center text-xs font-bold text-orange-800 shrink-0">
                        {tx.customer.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-stone-700">
                        {tx.customer}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-xs font-semibold text-stone-600">
                      {tx.items}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-right font-semibold text-stone-800 text-sm">
                    ${tx.totalAmount.toFixed(2)}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[tx.status]?.className}`}
                    >
                      {statusConfig[tx.status]?.label ?? tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-stone-600">
                      <span>{paymentIcon[tx.paymentMethod] ?? "💳"}</span>
                      <span>{tx.paymentMethod}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
