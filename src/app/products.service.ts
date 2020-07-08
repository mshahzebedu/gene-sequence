import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription) {
    console.log(ProductName, ProductDescription);
    const obj = {
      ProductName,
      ProductDescription
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, id) {
    const obj = {
      ProductName,
      ProductDescription
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
