import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  showSuccess(title: string, text: string): void {
    this.showAlert(title, text, 'success');
  }

  showError(title: string, text: string): void {
    this.showAlert(title, text, 'error');
  }

  private showAlert(title: string, text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'OK',
    });
  }
}
