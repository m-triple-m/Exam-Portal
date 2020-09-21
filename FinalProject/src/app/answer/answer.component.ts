import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { FormBuilder } from '@angular/forms';
import { AnswerserviceService } from '../answerservice.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  paperToAnswer;
  answerForm;
  constructor(private activated : ActivatedRoute, private quizservice: QuizService,private fb: FormBuilder,private answerservice: AnswerserviceService) { }

  ngOnInit(): void {
    let paper_id = this.activated.snapshot.paramMap.get('paperid');
    this.quizservice.getPaperById(paper_id).subscribe(data => {
      console.log(data);
      this.paperToAnswer = data;
    })
  
  this.answerForm = this.fb.group({
    paper : paper_id,
    name : '',
    roll_no : '',
    created : new Date()
  })
}

submitAnswer(){
  let formdata = this.answerForm.value;
  formdata.solved_paper = this.paperToAnswer;
  console.log(formdata);
  this.answerservice.addAnswer(formdata).subscribe((data) => {
    console.log(data);
  });
}

}
