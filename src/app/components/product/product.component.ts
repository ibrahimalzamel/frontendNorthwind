import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Porduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:Porduct[]=[];
 dataLoaded = false;
 filterText="";
  constructor(private productService:ProductService , 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService : CartService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
     this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts();
    }
    })
  }
 getProducts(){
   this.productService.getProducts().subscribe(response=>{
    this.products =response.data
    this.dataLoaded = true;
   })
 }
 getProductsByCategory(categorId:number){
  this.productService.getProductsByCategory(categorId).subscribe(response=>{
   this.products =response.data
   this.dataLoaded = true;
  })
}
addToCart(product:Porduct){
  if(product.productID===1)
  {
    this.toastrService.error("Hata","Bu ürün sepete eklenmez")
  }else{    
   this.toastrService.success("Sepete eklendi",product.productName)
   this.cartService.addToCart(product);
  }
}
}
