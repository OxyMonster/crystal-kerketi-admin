import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';




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
    private fb: FormBuilder, 
    private translateService: TranslateService
  ) {
    this.loginForm = this.fb.group({
      userName: [ '', Validators.required ],
      password: [ '', Validators.required ]

    }); 

    translateService.setDefaultLang('eng'); 

   }


  ngOnInit() {
  
  }; 


  onSubmit(adminForm: FormGroup) {  
     
    console.log(adminForm.value);
    this.loginForm.reset(); 
    
  }; 

  toggleLanguage(language) {

    this.isEngLangActive = !this.isEngLangActive; 
    this.translateService.use(language)

  
  }; 

  



}
