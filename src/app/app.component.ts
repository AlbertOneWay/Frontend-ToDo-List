import { AfterViewInit, Component, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from './services/toast/toast.service';
import { ViewContainerToastService } from './services/toast/view-container-toast.service';

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
    private viewContainerToastService: ViewContainerToastService
  ) {

  }

  ngOnInit(): void {
    const viewContainerToastSubscription = this.viewContainerToastService.viewContainerObservable?.subscribe(vc => {
      this.toastService.toastContainerRef = vc;
    })

    this.subscription.add(viewContainerToastSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
