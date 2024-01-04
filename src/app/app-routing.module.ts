import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/ui/theme/layout';
import { NavigationPath } from './core/navigation/common';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [      {
      path: '',
      loadChildren: (): Promise<any> => import('./booking/page')
      .then((modules) => modules.BookingPageModule),
    },
    {
      path: NavigationPath.Rooms,
      loadChildren: (): Promise<any> => import('./room/page').then((modules) => modules.RoomPageModule),
    },
    // {
    //   path: NavigationPath.Admin,
    //   loadChildren: (): Promise<any> => import('@app/admin/page').then((modules) => modules.AdminPageModule),
    // },
  ],
  },
  {
    path: '**',
    loadChildren: (): Promise<any> => import('./errors/not-found/page').then((modules) => modules.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
