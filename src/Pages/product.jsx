import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image = "/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
          deserunt libero voluptas ad iure esse odit praesentium autem iste
          distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
          exercitationem!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image = "/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolores
          deserunt libero voluptas ad iure esse odit praesentium autem iste
          distinctio, dolorum, illo ipsa expedita. Cumque corporis quam animi
          exercitationem!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
