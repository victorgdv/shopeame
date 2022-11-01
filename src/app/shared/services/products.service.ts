import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


getProducts() {
return this.http.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
}

postProduct(newItem: any) {
  return this.http.post("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products", newItem)
}
}
