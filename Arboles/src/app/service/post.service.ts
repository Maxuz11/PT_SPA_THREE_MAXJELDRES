import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postComentar(item:any){
    return this.http.post(`${this.apiUrl}/comentar/`,item);
  }
}
