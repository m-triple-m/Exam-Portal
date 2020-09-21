import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuizService } from '../quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  allquestions=[];
  quizform;
  user;
  
  constructor(private fb: FormBuilder, private quizservice: QuizService) { }
  
  ngOnInit(): void {
    
    this.user=JSON.parse(sessionStorage.getItem('user'));

    this.initForm()
    console.log(this.user)
  }

 

  initForm(){
    this.quizform = this.fb.group({
      user: this.user._id,
      
      title : '',
      desc : '',
      subject : '',
    })
  }

  addquestion(){
    this.allquestions.push({ques:'',type:'long'})
  }

  submitform(){
    this.quizform.value.QandA = this.allquestions;
    console.log(this.quizform.value);
    this.quizservice.addquestionform(this.quizform.value).subscribe((data)=>{
      console.log(data);
    });
  }

  finishCreating(){
    let formdata = this.quizform.value;
    formdata.QandA = this.allquestions;
    console.log(formdata);

    this.quizservice.addQuiz(formdata).subscribe(data => {
      console.log(data);
      Swal.fire({icon : 'success', title : 'You have done a great JOB!!'});
    })
  }

  addOptions(index){
    if(!this.allquestions[index].options){
      this.allquestions[index].options = ['option'];
    }else{
      this.allquestions[index].options.push('option');
    }
  }

}
