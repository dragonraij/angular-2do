import { NgModule } from '@angular/core';
import { RouterModule, routes } from '@angular/router';
import {AppComponent } from './app.component';

const routes : Routes = [
    {
    path : '',
    redirectTo : 'todos',
    pathMatch: 'full'
    },
    
    {
        path : 'todos',
        component: AppComponent
    
    }

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers : []

})

export class AppRoutingModule {

}