import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerserviceService {
  
  url="http://localhost:3000/answer"
  constructor(private http: HttpClient) { }

  addAnswer(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getAnswersByPaper(id){
    return this.http.get(this.url+'/getbypaper/'+id);
  }
}
