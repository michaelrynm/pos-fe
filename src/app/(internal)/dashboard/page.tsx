import DashboardHeader from "@/features/internal/dashboard/components/dashboard-header";
import InformationCard from "@/features/internal/dashboard/components/information-card";
import ProductSection from "@/features/internal/dashboard/components/product-section";
import RecentTransaction from "@/features/internal/dashboard/components/recent-transaction";
import SalesChart from "@/features/internal/dashboard/components/sales-chart";
import SummaryCard from "@/features/internal/dashboard/components/summary-card";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <SummaryCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 sm:px-6 mt-4 sm:mt-5 gap-5 lg:gap-8 items-stretch">
        <div className="lg:col-span-2 h-full">
          <SalesChart />
        </div>
        <div className="h-full">
          <InformationCard />
        </div>
      </div>

      <ProductSection />
      <RecentTransaction />
    </div>
  );
}
