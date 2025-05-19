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
  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) {}

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

  changeLanguage(language: string) {
    if (language && ['en', 'fr'].includes(language)) {
      this.translate.use(language);
    }
  }

  sidebarToggle() {
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler) {
      navbarToggler.classList.toggle('show');
    }
  }
}
