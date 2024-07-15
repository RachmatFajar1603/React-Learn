import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: "Sepatu Baru",
      price: "Rp 1.000.000",
      image: "/images/shoes-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
          deserunt libero voluptas ad iure esse odit praesentium autem iste
          distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
          exercitationem!`,
    },
    {
      id: 2,
      title: "Sepatu Adadong",
      price: "Rp 1.500.000",
      image: "/images/shoes-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
          deserunt libero voluptas ad iure esse odit praesentium autem iste
          distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
          exercitationem!`,
    },
    {
      id: 3,
      title: "Sepatu Kuma",
      price: "Rp 1.000.000",
      image: "/images/shoes-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
          deserunt libero voluptas ad iure esse odit praesentium autem iste
          distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
          exercitationem!`,
    },
  ];

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClik={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductPage;
