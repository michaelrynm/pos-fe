export default function ProductCard() {
  return (
    <div className="max-w-sm">
      <div className="bg-gray-300 w-full aspect-square rounded-4xl flex items-center justify-center">
        <p>for image later</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-medium">Espresso Ice Coffee</p>
          <p className="mt-1 text-sm text-gray-500">Category: Ice Coffee</p>
        </div>

        <div className="rounded-full border px-3 py-1 border-black text-sm">
          IDR 30k
        </div>
      </div>
    </div>
  );
}
