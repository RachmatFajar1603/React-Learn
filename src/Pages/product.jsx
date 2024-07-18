import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
        deserunt libero voluptas ad iure esse odit praesentium autem iste
        distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
        exercitationem!`,
  },
  {
    id: 2,
    title: "Sepatu Adadong",
    price: 1500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
        deserunt libero voluptas ad iure esse odit praesentium autem iste
        distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
        exercitationem!`,
  },
  {
    id: 3,
    title: "Sepatu Kuma",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
        deserunt libero voluptas ad iure esse odit praesentium autem iste
        distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
        exercitationem!`,
  },
];

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      navigate("/login");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };
  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex-wrap flex">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.qty}</td>
                    <td>Rp {product.price.toLocaleString('id-ID', {style:'currency', currency:'IDR'})}</td>
                    <td>Rp {(product.price * item.qty).toLocaleString('id-ID', {style:'currency', currency:'IDR'})}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 flex justify-center mb-5">
        <Counter/>
      </div>
    </>
  );
};

export default ProductPage;