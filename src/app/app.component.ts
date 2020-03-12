import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crystal-kerketi-admin';

  constructor(
    private translateService: TranslateService
  ) {

    translateService.setDefaultLang('eng'); 

  }; 


}
