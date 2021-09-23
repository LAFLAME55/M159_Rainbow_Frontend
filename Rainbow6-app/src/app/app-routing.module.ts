import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {OperatorsComponent} from "./operators/operators.component";
import {StoreComponent} from "./store/store.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'overview', component: OverviewComponent },
  { path: 'operators', component: OperatorsComponent},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data.reuseRoute === true;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
