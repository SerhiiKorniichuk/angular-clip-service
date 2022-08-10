import { Component, OnDestroy, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal/modal.service'

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.register('auth')
  }

  ngOnDestroy() {
    this.modalService.unregister('auth')
  }
}
