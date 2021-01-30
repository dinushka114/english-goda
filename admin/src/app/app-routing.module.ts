import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth-guard.service';

const routes: Routes = [

  {
    path:'dashboard',
    loadChildren:()=> import('src/app/modules/navigation/navigation.module').then(m=>m.NavigationModule),
    canActivate:[AuthGuard]

  },
  {
    path:'' , 
    loadChildren:()=>import('src/app/modules/auth/auth.module').then(m=>m.AuthModule)
  },
  
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
