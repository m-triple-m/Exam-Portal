import { Component, OnInit } from '@angular/core';
import { AnswerserviceService } from '../answerservice.service';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

  responses;
  selectedResponse;
  paper;

  constructor(private answerservice: AnswerserviceService,private quizservice: QuizService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    let paper_id = this.activated.snapshot.paramMap.get('paperid');
    this.quizservice.getPaperById(paper_id).subscribe(data => {
      this.paper = data;
    })
    this.getResponses(paper_id);
  }

  getResponses(paper_id){
    this.answerservice.getAnswersByPaper(paper_id).subscribe(data => {
      console.log(data);
      this.responses = data;
    })
  }

  selectResponse(index){
    this.selectedResponse = this.responses[index];
  }

}
