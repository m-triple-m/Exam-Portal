import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url="http://localhost:3000/quesform";

  constructor(private http: HttpClient, private router : Router) { }

  addquestionform(formdata){
    return this.http.post(this.url + "/add", formdata);
  }

  addQuiz(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getPapersByUser(id){
    return this.http.get(this.url+'/getbyuser/'+id);
  }

  getPaperById(id){
    return this.http.get(this.url+'/getbyid/'+id);
  }
}
