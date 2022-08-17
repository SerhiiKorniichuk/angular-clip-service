import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ])
  email = new FormControl('', [Validators.required, Validators.email])
  phoneNumber = new FormControl('', [Validators.required])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z]){6,30}/g)
  ])
  confirmPassword = new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword
  })

  showAlert = false
  alertMessage = ''
  alertColor = 'sky'

  submit() {
    this.showAlert = true
    this.alertMessage = 'Please wait! Your account is being created.'
  }
}
