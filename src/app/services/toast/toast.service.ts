import { Injectable , ViewContainerRef} from '@angular/core';
import { ToastData } from 'src/app/models/shred/toast-data';
import { ToastComponent } from 'src/app/modules/shared/toast/toast.component';




@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastContainer?: ViewContainerRef;

  constructor() { }

  openToast(data: ToastData): void {
    console.log(data);
    
    const { message, type } = data;    
   
      this.toastContainer?.clear();
      const referenciaComponente = this.toastContainer!.createComponent<ToastComponent>(ToastComponent);

      referenciaComponente.instance.message = message;
      referenciaComponente.instance.type = type;

      referenciaComponente.instance.openToast();
    
  }

  set toastContainerRef(toastContainer: ViewContainerRef) {
    if (!this.toastContainer) {      
      this.toastContainer = toastContainer;
    }
  }
}
