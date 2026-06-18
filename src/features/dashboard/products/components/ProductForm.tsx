import { createProduct } from "../actions/create-product";

export function ProductForm() {
  return (
    <form action={createProduct}>
      <input name="name" />
      <input name="price" />
      <input name="stock" />

      <button type="submit">
        Save
      </button>
    </form>
  );
}