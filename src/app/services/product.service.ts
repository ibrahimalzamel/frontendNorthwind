import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Porduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl='https://localhost:44366/api/Products/getall';
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Porduct>>{
   return this.httpClient.get<ListResponseModel<Porduct>>(this.apiUrl);
 }
}
