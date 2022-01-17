import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseVM } from '../ViewModels/http-response-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {

  constructor(private httpClient: HttpClient) { }

  // getAll():Observable<HttpResponseVM>
  // {

  // }

  // getOneByID() :Observable<HttpResponseVM>
  // {}

  // post(newItem: any):Observable<HttpResponseVM>
  // {

  // }

  // put(id: number, newItem: any):Observable<HttpResponseVM>
  // {

  // }

  // delete(id:number):Observable<HttpResponseVM>
  // {

  // }
}
