import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArboles() {
    return this.http.get(this.apiUrl+'/arboles');
  }

  getImg(id:number){
    return this.http.get(`${this.apiUrl}/fotoArbol/${id}`);
  }

  getCoordenadas(id:number){
    return this.http.get(`${this.apiUrl}/ubicacionArbol/${id}`);
  }

  getIdUbi(id:number){
    return this.http.get(`${this.apiUrl}/ubicacionId/${id}`);
  }
}
