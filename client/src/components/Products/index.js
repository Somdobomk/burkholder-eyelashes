const products = [
  {
    id: 1,
    name: "Crystallized Fans™ 500 Collection | 0.03mm/0.05mm | 8-15mm Mix Trays",
    color: "Natural",
    price: "$50.00",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0539/7102/6115/products/500Collection_Thumbnail_copy_360x.jpg?v=1634757638",
    imageAlt: "Adhesive",
  },
  {
    id: 2,
    name: "Crystallized Fans™ 200 Collection | 0.07mm",
    color: "Natural",
    price: "$25.00",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0539/7102/6115/products/200Collection_copy_8e5f7f8e-4ff5-4885-9ccc-09413e0c810e_360x.jpg?v=1635449487",
    imageAlt: "Adhesive",
  },
  {
    id: 3,
    name: "Lint Free Gel Patches",
    color: "Natural",
    price: "$14.00",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0539/7102/6115/products/LintFreeGelPatches_Thumbnail_1024x1024@2x.jpg?v=1632493825",
    imageAlt: "Adhesive",
  },
  {
    id: 4,
    name: "Diamond Adhesive",
    color: "Natural",
    price: "$55.00",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA5_Diamond5ml_Thumbnail_360x.jpg?v=1614015061",
    imageAlt: "Adhesive",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="/products"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Show More<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Show More<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
