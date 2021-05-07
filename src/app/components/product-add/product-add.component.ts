import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup ;
  constructor(private formBulider:FormBuilder,
    private prodcutService : ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
createProductAddForm(){
  this.productAddForm=this.formBulider.group({

    categoryID:["",Validators.required],
    productName:["",Validators.required],
    unitsInStock:["",Validators.required],
    unitPrice:["",Validators.required],
   
  })
}
add(){
  if(this.productAddForm.valid){
    let productModel = Object.assign({},this.productAddForm.value)
    this.prodcutService.add(productModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responsError=>{
      if(responsError.error.Errors.length>0){
        for (let i = 0; i < responsError.error.Errors.length; i++) {
          this.toastrService.error(responsError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
        }
       
      }
      
    })
  }else{
    this.toastrService.error("Formunuz","DİKKAT")
  }
}
}
