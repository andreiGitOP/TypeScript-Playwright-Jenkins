import { APIRequestContext } from "@playwright/test";

export class ProductList {
  readonly request: APIRequestContext;
  readonly productListUrl: string = "https://automationexercise.com/api/productsList";

  constructor(request: APIRequestContext) {
    {
      this.request = request;
    }
  }

  async getProductList(){
    return await this.request.get(this.productListUrl);
  }
}