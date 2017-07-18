import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './rover-form/rover-form.component';
// import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';


const appRoutes: Routes = [
{
  path: '',
  component: RoverFormComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
