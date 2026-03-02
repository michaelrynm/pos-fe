import { SidebarProvider } from "@/components/ui/sidebar";
import { InternalSidebar } from "@/components/globals/internal-sidebar";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";

export default async function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <SidebarProvider>
      <InternalSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
