import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${environment.MAIN_URL}/${url}`);
  }

  getById(url: string, id: number) {
    return this.http.get(`${environment.MAIN_URL}/${url}/${id}/`);
  }

  create(url: string, obj: any) {
    return this.http.post(`${environment.MAIN_URL}/${url}/`, obj);
  }

  update(url: string, id: number, obj: any) {
    return this.http.put(`${environment.MAIN_URL}/${url}/${id}/`, obj);
  }

  delete(url: string, id: number) {
    return this.http.delete(`${environment.MAIN_URL}/${url}/${id}/`);
  }
}
