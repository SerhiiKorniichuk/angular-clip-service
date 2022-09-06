import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { IAlertTypes } from 'src/app/shared/alert/alert.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AngularFireAuth) {}

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
    this.isSubmission = true
    this.showAlert = true
    this.alertMessage = 'Please wait! Your account is being created.'

    const { email, password } = this.registerForm.value

    try {
      const userCredentials =
        await this.authService.createUserWithEmailAndPassword(email!, password!)
      console.log('userCredentials', userCredentials)
      this.isSubmission = false
    } catch (e) {
      console.error(e)
      this.isSubmission = false
      this.alertType = 'error'
      this.alertMessage = 'An unexpected error occured. Please try again later.'
      return
    }

    this.alertType = 'success'
    this.alertMessage = 'Success! Your account has been created.'

    this.registerForm.reset()
  }
}
