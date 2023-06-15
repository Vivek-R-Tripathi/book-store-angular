import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundPageComponent } from './notfound-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NotfoundPageComponent,
    ToolbarComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,    
    MaterialModule,
    RouterModule
  ],
  exports:[ToolbarComponent,FooterComponent,MaterialModule]
})
export class SharedModule { }
