import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';
import { ChildrenOutletContexts, Router, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../Animation/animation-route';
import { AppLoaderService } from '../Service/app-loader/app-loader.service';
import { AuthService } from 'src/app/core/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(":enter", [
        style({ transform : 'scale(0)' }),
        animate('.1s ease-out', style({ transform : 'scale(1)' }))
      ]),
      transition(":leave", [
        style({ transform : 'scale(1)' }),
        animate('.1s ease-out', style({ transform : 'scale(0)' }))
      ])
    ]),
    slideInAnimation
  ]
})
export class AdminLayoutComponent implements OnInit, AfterContentChecked {

  showFiller = true;	
  windowWidth: number;
  isLoading = false;
  constructor(
    private contexts : ChildrenOutletContexts,
    private loader : AppLoaderService,
    private cdr : ChangeDetectorRef,
    private authService : AuthService,
    private router : Router
  ) { }

  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit(){
    this.getLoading();
  }
  getLoading() {
    this.loader.getLoading().subscribe(loading => {
      this.isLoading = loading;
    })
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  public logout() : Observable<boolean>{
    this.authService.logoutUser();
    this.router.navigate(['/session/sign-in']);

    return of(true);
  }

}
