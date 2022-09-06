import { Component, Input } from '@angular/core'

export type IAlertTypes = 'info' | 'success' | 'error'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() alertType: IAlertTypes = 'info'

  get bgColor() {
    switch (this.alertType) {
      case 'success':
        return 'bg-green-500'
      case 'error':
        return 'bg-red-500'
      case 'info':
      default:
        return 'bg-sky-500'
    }
  }
}
