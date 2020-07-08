import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-sequence-edit',
  templateUrl: './sequence-edit.component.html',
  styleUrls: ['./sequence-edit.component.css']
})
export class SequenceEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params.id).subscribe(res => {
          this.product = res;
      });
    });
  }

  updateProduct(ProductName, ProductDescription, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, params.id);
      this.router.navigate(['/admin/sequence_get']);
    });
  }

}
