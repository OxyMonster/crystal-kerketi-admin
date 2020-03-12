import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faLock, faFan } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { AdminLoginService } from './admin-login.service';
import { Router } from '@angular/router';




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
  isEngLangActive: boolean = true; 

  isError: boolean = false; 
  errorMessage: string; 


  

  constructor(
    private fb: FormBuilder, 
    private translateService: TranslateService, 
    private loginService: AdminLoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      agentName: [ '', Validators.required ],
      password: [ '', Validators.required ],
      languageId: 2

    }); 

    // translateService.setDefaultLang('eng'); 

   }


  ngOnInit() {
  
  }; 


  onSubmit(adminForm: FormGroup) {  
    
    //  * * * Set Language * * * 
    this.isEngLangActive ? this.loginForm.controls['languageId'].setValue(2) : 
                           this.loginForm.controls['languageId'].setValue(1); 
    // * * * Authorize * * * 
    this.loginService
        .authorizeAgent(adminForm.value)
        .subscribe( data => {

          if ( data['errorMessage'] ) {
            
            this.isError = true;
            this.errorMessage = data['errorMessage']; 

          } else {

            this.isError = false;
            this.router.navigate(['/agent-profile/client']); 
          }; 
          console.log(data);
          
        }, err => console.log(err) );  
    
  }; 

  toggleLanguage(language) {

    this.isEngLangActive = !this.isEngLangActive; 
    this.translateService.use(language)

  
  }; 

  



}
