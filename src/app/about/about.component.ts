import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  openModal(modalId: string): void {
    const modal = document.getElementById(`${modalId}-modal`);
    if (modal) {
      modal.classList.add('active');
    }
  }

  closeModal(): void {
    const modal = document.querySelector('.modal-overlay.active');
    if (modal) {
      modal.classList.remove('active');
    }
  }
}
