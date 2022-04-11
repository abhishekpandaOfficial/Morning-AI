import { Injectable } from '@angular/core';

interface IModal{
  id: string;
  visible : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //private visible = false 
  private modals : IModal[] =  []

  constructor() { }


isModalOpen(id: string) : boolean{
  // !! Operator will convert something to Boolen 
 //Boolean(this.modals.find(element =>element.id === id)?.visible)

  return !!this.modals.find(element =>{
    element.id === id
  })?.visible
}

toggleModal(id: string) {
const modal = this.modals.find(element =>element.id === id)
if(modal)
{
  modal.visible = !modal.visible
}

  // this.visible = !this.visible
}


register(id: string)
{
this.modals.push({
  id, visible:false
})

// console.log(this.modals)
}

}
