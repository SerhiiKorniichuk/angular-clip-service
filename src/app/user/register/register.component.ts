import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { IAlertTypes } from 'src/app/shared/alert/alert.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  isSubmission = false

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
  alertType: IAlertTypes = 'info'

  async register() {
    // Add lock for Submit button
    this.isSubmission = true
    // Show alert with info message
    this.showAlert = true
    this.alertType = 'info'
    this.alertMessage = 'Please wait! Your account is being created.'

    try {
      // Creating a new user
      await this.authService.createUser({
        name: this.name.value!,
        email: this.email.value!,
        phoneNumber: this.phoneNumber.value!,
        age: this.age.value!,
        password: this.password.value!
      })
      // Remove lock for Submit button
      this.isSubmission = false
    } catch (e) {
      console.error(e)
      // Remove lock for Submit button
      this.isSubmission = false
      // Show alert with error message
      this.alertType = 'error'
      this.alertMessage = 'An unexpected error occured. Please try again later.'
      return
    }

    // Show alert with success message
    this.alertType = 'success'
    this.alertMessage = 'Success! Your account has been created.'

    // Reset form
    this.registerForm.reset()
  }
}
