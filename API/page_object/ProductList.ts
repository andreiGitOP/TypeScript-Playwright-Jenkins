import { APIRequestContext } from "@playwright/test";

export class ProductList {
  readonly request: APIRequestContext;
  readonly productListUrl: string = "./api/productsList";

  constructor(request: APIRequestContext) {
    {
      this.request = request;
    }
  }

  async getProductList(){
    return await this.request.get(this.productListUrl);
  }

  async postToProductList(){
    return await this.request.post(this.productListUrl);
  }  
}