import ProductEntity from "../components/Product/ProductEntity";

const API_URL = "http://localhost:3004";

export function getProducts(): Promise<ProductEntity[]> {
  return fetch(`${API_URL}/products`).then((response: Response) =>
    response.json()
  );
}

export function getProduct(id: number): Promise<ProductEntity> {
  return fetch(`${API_URL}/products/${id}`)
  .then((response: Response) =>
    response.json()
  );
}

export async function createProduct(data: ProductEntity): Promise<void> {
  await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// export async function updateProduct(data) {
//   await fetch(`${API_URL}/products`, {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
