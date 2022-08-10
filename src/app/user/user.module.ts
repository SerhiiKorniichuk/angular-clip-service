import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalService } from '../services/modal/modal.service'
import { SharedModule } from '../shared/shared.module'
import { AuthModalComponent } from './auth-modal/auth-modal.component'

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent],
  providers: [ModalService]
})
export class UserModule {}
