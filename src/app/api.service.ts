import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	apiUrl:any='http://localhost/rest-api/index.php/api/';
  constructor(private http: HttpClient) { }
  status()
  {
      return this.http.get(this.apiUrl+'status');
  }

  baca()
  {
    return this.http.get(this.apiUrl+'data');
  }  

  simpan(data)
  {
    return this.http.post(this.apiUrl+'data',data);
  }
}
