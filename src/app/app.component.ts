import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  scrolled = false;
  currentLang = 'fr';

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50;
    });
    
    // Set the default language
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
    // Initialization code if needed
  }

  downloadCV() {
    const cvUrl = 'assets/cv/Kassi_Marvin_CV.pdf';
    
    // Try to download using FileSaver
    this.http.get(cvUrl, { responseType: 'blob' }).subscribe(
      (response) => {
        saveAs(response, 'Kassi_Marvin_CV.pdf');
      },
      (error) => {
        // Fallback to window.open if the above fails
        window.open(cvUrl, '_blank');
      }
    );
  }

  onLangChange(lang: string) {
    if (lang && ['en', 'fr'].includes(lang)) {
      this.currentLang = lang;
      this.translate.use(lang);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
