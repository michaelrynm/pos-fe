import Footer from "@/components/globals/footer";
import { UserHeader } from "@/features/users/components";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      <UserHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
