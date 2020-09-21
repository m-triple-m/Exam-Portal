import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private fb: FormBuilder,private userservice : UserserviceService ,private router : Router) { }
  
  ngOnInit(): void {
    this.initForm();
    
  }

  initForm(){
    this.loginform = this.fb.group({
      username : '',
      password : ''
    })
  }

  submitForm(formdata){
    console.log(formdata);

    this.userservice.getUserByUsername(formdata.username).subscribe(data =>{
      console.log(data);

      if(data){
        if(data['password'] == formdata['password']){

          sessionStorage.setItem('user',JSON.stringify(data));

          console.log('login success');
          Swal.fire({
            icon:'success',
            title: 'Login success',
            text : 'Logged in successfully',
          }).then( () => {
            this.router.navigate(['/dashboard']);
          } )
        }
        else{
        console.log('password incorrect');
        Swal.fire({
          icon:'error',
          title: 'Error',
          text : 'Username or password is incorrect',
        })
        }
      }
      else{
        console.log('user not found');
        Swal.fire({
          icon:'error',
          title: 'Error',
          text : 'Username or password is incorrect',
        })
      }
    })
  }
  
}
