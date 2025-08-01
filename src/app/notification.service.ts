import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  showInfo(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }

  showWarning(message: string) {   
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }
}