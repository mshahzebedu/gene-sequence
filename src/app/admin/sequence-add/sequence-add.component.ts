import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-sequence-add',
  templateUrl: './sequence-add.component.html',
  styleUrls: ['./sequence-add.component.css']
})
export class SequenceAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService ,  private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ]
    });
  }

  addProduct(ProductName, ProductDescription) {
    this.ps.addProduct(ProductName, ProductDescription);
    this.router.navigate(['/admin/sequence_get']);
  }

  ngOnInit() {
  }

}
