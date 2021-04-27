import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./unauthenticated/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
  { path: '', redirectTo: 'authentication/welcome-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
