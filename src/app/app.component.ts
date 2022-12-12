import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Machine Learning';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(private languageService: LanguageService, private translateService: TranslateService) {

  }

  ngOnInit() {
    this.languageService.setInitState();
    this.currentLanguage();
  }

  selectLanguageEN() {
    this.translateService.use("en");
    alert("hello");
  }
  selectLanguageCN() {
    this.translateService.use("cn");

  }
  selectLanguageVI() {
    this.translateService.use("vi");
  }
  currentLanguage() {
    return this.languageService.translate.currentLang;
  }
}
