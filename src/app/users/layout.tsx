import { UserHeader } from "@/components/users";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      <UserHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
