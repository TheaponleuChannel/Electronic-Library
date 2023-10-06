import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RoutePartsService } from '../../Service/route-parts.service';
import { Subscription, filter } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(":enter", [
        style({ transform : 'scale(0)' }),
        animate('.5s ease-out', style({ transform : 'scale(1)' }))
      ]),
      transition(":leave", [
        style({ transform : 'scale(1)' }),
        animate('.5s ease-out', style({ transform : 'scale(0)' }))
      ])
    ])

  ]
})
export class BreadcrumbComponent implements OnDestroy {
  routerPaths : any[];
  routerEventSub : Subscription;

  constructor(
    private router : Router,
    private routerPathService : RoutePartsService,
    private activeRoute : ActivatedRoute
  ) {
    
    this.routerPaths = this.routerPathService.generateRouteParts(this.activeRoute.snapshot);

    this.routerEventSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((routeChange) => {
        	this.routerPaths = this.routerPathService.generateRouteParts(this.activeRoute.snapshot);
           // generate url from parts
           this.routerPaths.reverse().map((item, i) => {
            item.breadcrumb = this.parseText(item);
            item.urlSegments.forEach((urlSegments,j) => {
              if(j === 0){
                return item.url = `${urlSegments.path}`;
              }
              return item.url += `/${urlSegments.path}`
            });
            if(i === 0) {
              return item;
            }
            item.url = `${this.routerPaths[i - 1].url}/${item.url}`;
            return item;
          });  
        
    })
  }
  ngOnDestroy() {
    if(this.routerEventSub) {
      this.routerEventSub.unsubscribe();
    }
  }
  private parseText(part) {
    if(!part.breadcrumb) {
      return ''
    }
  part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
    var r = part.params[b];
    return typeof r === 'string' ? r : a;
  });

  return part.breadcrumb;
}
}
