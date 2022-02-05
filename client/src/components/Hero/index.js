export default function Hero() {
  return (
    <div className="">
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0539/7102/6115/files/hero_img_2x_1101db36-e570-49ae-ab38-455ea9f412b1_1728x.png?v=1629399562s"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <div className="xxl:ml-56 relative mx-auto flex max-w-3xl flex-col items-start py-32 px-6 text-left sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white lg:text-6xl">
            Become everyone's favorite lash artist
          </h1>
          <p className="mt-4 text-xl text-white">
            We make lashes your clients love. Stock up on lash essentials you
            can trust.
          </p>
          <a
            href="/products"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium uppercase text-gray-900 hover:bg-gray-100"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
