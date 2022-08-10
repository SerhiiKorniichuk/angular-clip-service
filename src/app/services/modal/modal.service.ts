import { Injectable } from '@angular/core'

interface IModal {
  id: string
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  register(id: string) {
    this.modals.push({ id, visible: false })
  }

  unregister(id: string) {
    this.modals = this.modals.filter((modal) => modal.id !== id)
  }

  isModalOpen(id: string) {
    return !!this.modals.find((modal) => modal.id === id)?.visible
  }

  toggleModal(id: string) {
    this.modals = this.modals.map((modal) => {
      if (modal.id === id) return { ...modal, visible: !modal.visible }
      return modal
    })
  }
}
