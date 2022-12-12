import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItems } from './header-data';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Input() collapsed = false;
   @Input() screenWidth = 0;

   canShowSearchAsOverlay = false;
   selectedLanguage: any;

   languages = languages;
   notifications = notifications;
   userItems = userItems;

   address!: string;


   getHeadClass(): string
   {
     let styleClass = '';
     if(this.collapsed && this.screenWidth > 768)
     {
       styleClass = 'head-trmmed';
     }
     else
     {
       styleClass = 'head-md-screen';
     }
     return styleClass;
   }

   checkCanShowSearchAsOverlay(innerWidth: number): void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    }else{
      this.canShowSearchAsOverlay = false;
    }
   }

  showHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  showCart() {
    this.router.navigate(['/cart']).then(() => {
      window.location.reload();
    });
  }
  constructor (private router: Router, private languageService: LanguageService, private translateService: TranslateService){
    this.selectedLanguage = localStorage.getItem('LG');
    if(this.selectedLanguage === 'vn')
    {
      this.selectLanguageVI();
    }
    else {
      this.selectLanguageEN();
    }

    this.address = localStorage.getItem("ADDRESS") || '';
  }

  @HostListener('window:resize' , ['$event'])
  onResize(event: any)
  {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  selectLanguageEN() {
    this.translateService.use("en");
    this.selectedLanguage = 'en';
    localStorage.setItem('LG' , 'en');
  }
  selectLanguageCN() {
    this.translateService.use("cn");

  }
  selectLanguageVI() {
    this.translateService.use("vi");
    this.selectedLanguage = 'vn';
    localStorage.setItem('LG' , 'vn');
  }
  currentLanguage() {
    return this.languageService.translate.currentLang;
  }
}
