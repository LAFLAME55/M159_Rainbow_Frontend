import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {OperatorsComponent} from "./operators/operators.component";
import {StoreComponent} from "./store/store.component";

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'operators', component: OperatorsComponent},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
