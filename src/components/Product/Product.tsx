import { useState, useEffect } from "react";
import {
  getProduct,
  getProducts,
  //updateProduct,
  createProduct,
} from "../../services/httpService";
import ProductEntity from "./ProductEntity";

const Product = () => {
  const [product, setProduct] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");

  //   useEffect(() => {
  //     if (id !== undefined) {
  //       getProduct(id).then((result) => {
  //         setProductValue(result.product);
  //         setDescriptionValue(result.description);
  //       });
  //     }
  //   }, []);

  //   const submit = (e) => {
  //     e.preventDefault();

  //     sendData(new ProductEntity(product, amount, price, unit));
  //   };

  //   const sendData = async (data: ProductEntity) => {
  //     if (id !== undefined) {
  //       await updateProduct(data, id);
  //     } else {
  //       await createProduct(data);
  //     }
  //     navigate("/products");
  //   };
  const create = () => {
    createProduct(new ProductEntity("x", 1, 1, "y"));
  };

  const get =async () => {
   const p = await getProducts();
   console.table(p);
  };

  return (
    <>
      <input type="text" placeholder="dodaj produkt" />
      <input type="number" placeholder="cena" />
      <input type="number" placeholder="ilość" />
      <select placeholder="jednostka" />
      <button onClick={create}>create</button>
      <button onClick={get}>get</button>
    </>
  );
};

export default Product;
