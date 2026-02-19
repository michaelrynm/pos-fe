import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { BreadcrumbNav } from "@/features/users/components";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  // const product = products.find((p) => p.id === (await params.id));

  // if (!product) return notFound();

  const { id } = await params;

  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  return (
    <div className="px-6 py-8 space-y-8 container">
      {/* Breadcrumb */}
      <div className="lg:grid lg:grid-cols-2">
        <div className="text-md lg:text-xl text-muted-foreground">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>Product</span>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
        <div className="justify-self-end lg:mt-0 mt-4">
          <Button
            className="rounded-full text-xs lg:text-sm"
            variant="outline"
            size="sm"
          >
            <ArrowLeft />
            Return
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="bg-muted rounded-3xl p-10 flex items-center justify-center relative">
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.categoryId}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">{product.basePrice}</span>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-muted rounded-full px-4 py-2 gap-4">
              <Minus className="w-4 h-4 cursor-pointer" />
              <span className="font-medium">1</span>
              <Plus className="w-4 h-4 cursor-pointer" />
            </div>

            <Button className="rounded-full px-6">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Descriptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
