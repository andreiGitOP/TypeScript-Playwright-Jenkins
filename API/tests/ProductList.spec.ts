import { test, expect } from "@playwright/test";
import { ProductList } from "../page_object/ProductList";

let products: ProductList;

test.beforeEach(async ({ request }) => {
  products = new ProductList(request);
});

test("Get all products list", async ({}) => {
  const productsResponse = await products.getProductList();
  await expect(productsResponse.status()).toBe(200);
  const jsonResponse = await productsResponse.json();
  console.log(jsonResponse);
});

test("Post to product list returns error", async ({ request }) => {
  const productsResponse = await products.postToProductList();
  await expect(productsResponse.status()).toBe(200);
  const jsonResponse = await productsResponse.json();
  await expect(jsonResponse.responseCode).toBe(405);
  await expect(jsonResponse.message).toBe("This request method is not supported.");
});