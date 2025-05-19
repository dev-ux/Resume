import { Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private supportedLanguages = ['en', 'fr'];
  private defaultLanguage = 'en';

  constructor(private translate: NgxTranslateService) {
    translate.addLangs(this.supportedLanguages);
    translate.setDefaultLang(this.defaultLanguage);

    // Set the current language based on browser settings
    const browserLang = translate.getBrowserLang();
    if (browserLang && browserLang.match(/en|fr/)) {
      translate.use(browserLang);
    } else {
      translate.use(this.defaultLanguage);
    }
  }

  public use(language: string): void {
    if (this.supportedLanguages.includes(language)) {
      this.translate.use(language);
    }
  }

  public getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  public getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }
}
