import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Router } from '@angular/router';

interface RoutePart {
  title: string;
  breadcrumb: string;
  param?: Params;
  url: string;
  urlSegments : any[]
}
@Injectable({
  providedIn: 'root'
})
export class RoutePartsService {

  public routeParts : RoutePart[];	
  constructor( private router :  Router) { }

  generateRouteParts(snapshot: ActivatedRouteSnapshot): RoutePart[]{
    let routerPaths = <RoutePart[]>[];
    if(snapshot){
      if(snapshot.firstChild){
        routerPaths = routerPaths.concat(this.generateRouteParts(snapshot.firstChild));
      }
      if(snapshot.data['title'] && snapshot.url.length){
        routerPaths.push({ 
          title: snapshot.data['title'],
          breadcrumb: snapshot.data['breadcrumb'],
          param: snapshot.params,
          url: snapshot.url[0].path,
          urlSegments : snapshot.url
        });
      }
    }
    return routerPaths;
    
  }
}
