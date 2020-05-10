import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl: any = 'https://5e9d761e0fd0b50016f7553a.mockapi.io/api/v1/';
  status() {
    return this.http.get(this.apiUrl + 'api');
  }
  baca() {
    return this.http.get(this.apiUrl + 'api/');

  }
  simpan(data) {
    return this.http.post(this.apiUrl + 'api', data);

  }
  ubah(data) {

    return this.http.put(this.apiUrl + 'api/' + data.id, data);
  }
  hapus(id) {

    return this.http.delete(this.apiUrl + 'api/' + id);
  }

}

