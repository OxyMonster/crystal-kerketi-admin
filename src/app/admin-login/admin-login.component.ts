import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  faUser, faLock} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  
  // * * *   Icons * * *  
  faUser = faUser; 
  faLock = faLock;  
  // * * / * * 
  
  loginForm: FormGroup;
  isEngLangActive: boolean = false; 


  

  constructor(
    private fb: FormBuilder   
  ) {
    this.loginForm = this.fb.group({
      userName: [ '', Validators.required ],
      password: [ '', Validators.required ]

    }); 
   }


  ngOnInit() {
  
  }; 


  onSubmit(adminForm: FormGroup) {  
     
    console.log(adminForm.value);
    this.loginForm.reset(); 
    
  }; 

  toggleLanguage() {

    this.isEngLangActive = !this.isEngLangActive; 
  
  }; 
  



}
