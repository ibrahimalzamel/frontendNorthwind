import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Porduct } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl='https://localhost:44366/api/';
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Porduct>>{
   let newPath = this.apiUrl+"products/getall"
   return this.httpClient.get<ListResponseModel<Porduct>>(newPath);
 }
 
 getProductsByCategory(categoryId:number):Observable<ListResponseModel<Porduct>>{
  let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId
  return this.httpClient.get<ListResponseModel<Porduct>>(newPath);
}
add(product:Porduct):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
}

}
