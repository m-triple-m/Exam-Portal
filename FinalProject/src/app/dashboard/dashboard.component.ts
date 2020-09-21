import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showcreate = false;

  questionPapers = [];
  currentUser;

  constructor(private quizservice: QuizService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.quizservice.getPapersByUser(this.currentUser._id).subscribe((data :any) => {
      console.log(data);
      this.questionPapers = data;
    })
  }

  toggleCreate(){
    this.showcreate = true;
  }

  promptCopy(index){
    let id  = this.questionPapers[index]._id;
    Swal.fire({
      text : 'URL : http://localhost:4200/answer/'+id
    })
  }
}
