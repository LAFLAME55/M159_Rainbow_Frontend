import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {OperatorsComponent} from "./operators/operators.component";
import {StoreComponent} from "./store/store.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'maps', component: OverviewComponent, pathMatch: 'full' },
  { path: 'operators', component: OperatorsComponent, pathMatch: 'full'},
  { path: 'store', component: StoreComponent, pathMatch: 'full'},
  {path: '', component: AppComponent, pathMatch: 'full'}

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
