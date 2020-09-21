import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { SignupComponent } from './signup/signup.component';
import { AnswerComponent } from './answer/answer.component';
import { ResponsesComponent } from './responses/responses.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path :'',redirectTo:"/home",pathMatch:"full"},
  {path :'home',component: HomeComponent},
  {path :'login',component: LoginComponent},
  {path :'dashboard',component : DashboardComponent},
  // {path :'quiz',component : AddQuizComponent},
  {path :'signup',component : SignupComponent},
  {path : 'answer/:paperid', component: AnswerComponent},
  {path : 'responses/:paperid', component: ResponsesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
