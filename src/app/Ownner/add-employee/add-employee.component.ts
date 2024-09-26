import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  // employeeForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.employeeForm = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     firstname: ['', Validators.required],
  //     lastname: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', Validators.required]
  //   });

  // }

  // onSubmit() {
  //   if (this.employeeForm.valid) {
  //     console.log(this.employeeForm.value);
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  registermasterForm!: FormGroup; // Use non-null assertion here to avoid TS errors
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.registermasterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      key: ['', Validators.required]  // Corrected to lowercase
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): { [key: string]: any } | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
  };

  onRegister() {
    this.submitted = true;

    if (this.registermasterForm.invalid) {
      return;
    }

    const { firstName, lastName, username, password, email, phone, key } = this.registermasterForm.value;

    this.http.post('http://localhost:3001/api/register_master', {
      firstName,
      lastName,
      username,
      password,
      email,
      phone,
      key
    }).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        alert('Registration successful!');
        this.router.navigate(['/log-in']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    });
  }
}

