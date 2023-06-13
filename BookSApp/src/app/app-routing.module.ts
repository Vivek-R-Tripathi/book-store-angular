import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NotfoundPageComponent } from './shared/notfound-page.component';


const routes: Routes = [{ path: 'about-us', component: AboutUsComponent },
{ path: 'how-it-works', component: HowItWorksComponent },

// Wild Card Route when no exact path matches with the route then execute wild card routes
// and open whiich ever component you want to use
//Also the app-routine declartion order matters
{ path: '**', component: NotfoundPageComponent }
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
