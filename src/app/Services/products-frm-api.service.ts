import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsFrmAPIService {
  private httpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , 'Authorization':'Access Token'
      })
    }
   }

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.API_Base_URL}/Products`);
  }

  getProductsByCatID(cID: number):Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.API_Base_URL}/Products?categoryID=${cID}`);
  }

  getProductByID(pID:number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.API_Base_URL}/Products/${pID}`);
  }

  postProduct(newPrd: IProduct):Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.API_Base_URL}/Products`,JSON.stringify(newPrd), this.httpHeaders);
  }

  putProduct(prdID:number, newPrd: IProduct)
  {
    
  }

  deleteProduct(prdID: number)
  {
    
  }
}
