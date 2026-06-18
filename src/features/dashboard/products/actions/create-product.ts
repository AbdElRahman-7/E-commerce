'use server';

export async function createProduct(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim();
  const price = Number(formData.get('price') ?? 0);
  const stock = Number(formData.get('stock') ?? 0);

  console.log('Creating product', { name, price, stock });
}
