import { test, expect } from "@playwright/test";
import { ProductList } from "../ProductList";

test("Get all products list", async ({ request }) => {
  const products = new ProductList(request);
  const productsResponse = await products.getProductList();
  await expect(productsResponse.status()).toBe(200);
  const jsonResponse = productsResponse.json();
});