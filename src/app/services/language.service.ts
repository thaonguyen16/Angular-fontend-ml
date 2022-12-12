import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class LanguageService {
    language$ = new ReplaySubject<LangChangeEvent>(1);
    translate = this.translateService;

    constructor(private translateService: TranslateService) {}

    setInitState() {
      this.translateService.addLangs(['en', 'cn','vi']);
      console.log( 'Browser Lang', this.translate.getBrowserLang());
      const browserLang = (this.translate.getBrowserLang()?.includes('vi')) ? 'vi' : 'cn'  ;
      console.log("anhtt "," anguage  = " +browserLang);

      this.setLang(browserLang);
    }

    setLang(lang: string) {
      this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
        this.language$.next(result);
      });
      this.translateService.use(lang);

    }
  }
