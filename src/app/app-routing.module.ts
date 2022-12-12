import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalihousingComponent } from './components/pages/calihousing/calihousing.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'post/calihousing' , component: CalihousingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
