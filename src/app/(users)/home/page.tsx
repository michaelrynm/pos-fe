import BookingCard from "@/features/home/components/book-card";
import BrandStory from "@/features/home/components/brand-story";
import Hero from "@/features/home/components/hero";
import News from "@/features/home/components/news";
import Newsletter from "@/features/home/components/newsletter";
import ProductList from "@/features/home/components/products";
import TestimonyCard from "@/features/home/components/testimony-card";

export default function HomePage() {
  return (
    <div className="min-w-0">
      <section id="home"><Hero /></section>
      <section id="about"><BrandStory /></section>
      <section id="services"><ProductList /></section>
      <section id="booking"><BookingCard /></section>
      <section id="testimony"><TestimonyCard /></section>
      <section id="news"><News /></section>
      <section id="contact"><Newsletter /></section>
    </div>
  );
}
