import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { InternalSidebar } from "@/components/globals/internal-sidebar";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <InternalSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
