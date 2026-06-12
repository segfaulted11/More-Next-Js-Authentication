import ProductCard from "../components/ProductCard";

const getProducts = async () => {
//   const res = await fetch("http://localhost:5000/products", {
//     cache: "force-cache",});
    // Fetches data once and saves it in the cache.
  // Future requests use the cached data instead of fetching again.
  // If the server data changes, the cached version may still be shown.

  // const res = await fetch("http://localhost:5000/products",{cache:"no-store"});
  // Always fetches fresh data from the server.
  // Nothing is cached, so any changes on the server are reflected immediately.

  const res = await fetch("http://localhost:5000/products", {next : {revalidate:20}});//after 20s of changing data, the changed will be displayed on the UI.

  //which one to use depends on the need.

  const products = await res.json();
  return products;
};

const Products = async () => {
  const products = await getProducts(); //aaray of objects
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Products page</h2>
      <h2>Total Products : {products.length}</h2>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
