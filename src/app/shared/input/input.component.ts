import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl()
  @Input() isPassword = false
  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() min = ''
  @Input() mask = ''
  @Input() prefix = ''
  @Input() validation = false

  ngOnInit() {
    this.type = this.isPassword ? 'password' : this.type
  }

  togglePasswordVisibility() {
    this.type = this.type === 'text' ? 'password' : 'text'
  }
}
