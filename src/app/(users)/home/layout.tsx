import Footer from "@/components/globals/footer";
import HomeNavbar from "@/features/home/components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  );
}
