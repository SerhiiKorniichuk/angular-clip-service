import { Component } from '@angular/core'
import { ModalService } from '../services/modal/modal.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public modalService: ModalService) {}

  openModal($event: Event) {
    $event.preventDefault()
    this.modalService.toggleModal('auth')
  }
}
