import { Component, OnInit } from '@angular/core';
import Product from '../../Product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-sequence-get',
  templateUrl: './sequence-get.component.html',
  styleUrls: ['./sequence-get.component.css']
})
export class SequenceGetComponent implements OnInit {
  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

  // product-get.component.ts

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}
