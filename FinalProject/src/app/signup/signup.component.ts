import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup;
  
  constructor(private fb: FormBuilder,private userservice: UserserviceService,private router : Router) { }

  ngOnInit(): void {
    this.initForm()
    
  }

  initForm()
  {
    this.signup=this.fb.group({
      name: ['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.required],
      address:['', Validators.required],
      password: ['',Validators.required]
    })
  }


  getControl(name){
    return this.signup.controls[name];
  }

  submitForm(formdata)
  {
    console.log(formdata);

    if(this.signup.invalid){
      Swal.fire({
        icon : 'error',
        title : 'Invalid Form'
      })
      return;
    }


    this.userservice.addUser(formdata).subscribe((response) =>{
        console.log(response);
        Swal.fire({
          icon : 'success',
          title : 'Registered Successfully',
          text : 'Now you can login to continue'
        }).then(()=>{
          this.router.navigate(['/login']);
        })
    })
  }
}