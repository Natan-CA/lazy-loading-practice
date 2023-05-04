import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './layout/guest/guest.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserGuard } from './guards/user.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canMatch: [UserGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
