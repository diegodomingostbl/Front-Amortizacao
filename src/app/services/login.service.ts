import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly storageKey = 'loginData';

  constructor(private router: Router) {}

  saveLoginData(name: string, email: string): void {
    const loginData = { name, email };
    localStorage.setItem(this.storageKey, JSON.stringify(loginData));
    this.router.navigate(['/amortizacao']);
  }

  getLoginData(): { name: string; email: string } | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearLoginData(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    const userData = localStorage.getItem(this.storageKey);
    return !!userData;
  }
}
