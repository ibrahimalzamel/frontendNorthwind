import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porduct } from '../models/product';
import { Todo } from '../models/todo';
import { TodoResponseModel } from '../models/TodoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl='http://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
   return this.httpClient.get<Todo[]>(this.apiUrl);
 }

}
