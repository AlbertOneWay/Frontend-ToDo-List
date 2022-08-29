import { AfterViewInit, Component, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from './services/toast/toast.service';
import { ViewContainerToastService } from './services/toast/view-container-toast.service';
import { ModalService } from './services/modal/modal.service';
import { ViewContainerModalService } from './services/modal/view-container-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todo-list-ng';
  faCog = faCog;

  subscription: Subscription = new Subscription();

  constructor(
    private toastService: ToastService,
    private viewContainerToastService: ViewContainerToastService,
    private modalService: ModalService,
    private viewContainerModalService: ViewContainerModalService,
  ) {

  }

  ngOnInit(): void {
    const viewContainerModalSubscription = this.viewContainerModalService.viewContainerObservable?.subscribe(vc => {
      this.modalService.modalContainerRef = vc;
    });

    const viewContainerToastSubscription = this.viewContainerToastService.viewContainerObservable?.subscribe(vc => {
      this.toastService.toastContainerRef = vc;
    })

    this.subscription.add(viewContainerModalSubscription);
    this.subscription.add(viewContainerToastSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
