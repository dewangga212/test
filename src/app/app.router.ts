import {Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {CommentComponent} from './comments';
import {LoginComponent} from './login';

const routes:Routes=[
    {path:'comments',component:CommentComponent},
    { path: '',redirectTo: 'login' ,pathMatch: 'full'},
    { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);