import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css']
})
export class ManagementPageComponent implements OnInit {

  userRegisterForm!: any;
  isSubmit = false;
  newItem = []

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {

    this.userRegisterForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required, Validators.minLength(1)]],
      description: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      image: ["", [Validators.required]],
    });

    this.userRegisterForm.valueChanges.subscribe((change:any)=>{
      console.log(change)
    })
  }
  submit(){
    this.isSubmit=true
    this.newItem = this.userRegisterForm.value
    console.log(this.newItem)

    this.productsService.postProduct(this.newItem).subscribe()

}
}
