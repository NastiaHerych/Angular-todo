import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/shared/auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'
        ),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;
    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .signUp(email, password)
      .pipe(
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
