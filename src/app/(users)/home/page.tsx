import BookingCard from "@/features/home/components/book-card";
import BrandStory from "@/features/home/components/brand-story";
import Hero from "@/features/home/components/hero";
import ProductList from "@/features/home/components/products";
import TestimonyCard from "@/features/home/components/testimony-card";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandStory />
      <ProductList />
      <BookingCard />
      <TestimonyCard />
    </div>
  );
}
