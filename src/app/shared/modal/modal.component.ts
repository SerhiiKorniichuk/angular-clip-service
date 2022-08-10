import { Component, Input } from '@angular/core'
import { ModalService } from 'src/app/services/modal/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalID = ''

  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalService.toggleModal(this.modalID)
  }
}
