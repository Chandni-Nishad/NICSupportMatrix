import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) {

   
   }
   SignUp(data:any){
    console.log("Inside service");
    return this.http.post('http://localhost:3000/users/data',data);
}
getData(){
  return this.http.get('http://localhost:3000/users/data');
}




}

