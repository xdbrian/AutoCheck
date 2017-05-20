//dependences
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageError } from './component/message-error/message-error.component';
import { ViewChild } from '@angular/core'
import { MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdTabsModule
  } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderVehiculeComponent } from './component/header-vehicule/header-vehicule.component';
import { InfoVehiculeComponent } from './component/info-vehicule/info-vehicule.component';
//components

//views
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { GeneralInfoVehiculeComponent } from './component/general-info-vehicule/general-info-vehicule.component';
import { DetailInfoVehiculeComponent } from './component/detail-info-vehicule/detail-info-vehicule.component'
import { CommentsComponent } from './comments/comments.component'
//services
import { GeneralData } from './services/GeneralData.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderVehiculeComponent,
    InfoVehiculeComponent,
    HomeComponent,
    DetailComponent,
    GeneralInfoVehiculeComponent,
    DetailInfoVehiculeComponent,
      CommentsComponent,
      MessageError
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdTabsModule,
    RouterModule.forRoot([
        {
        path: '',
        component: HomeComponent
      },
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'general-info',
        component : GeneralInfoVehiculeComponent
      },
      {
        path : 'detail-info',
        component : DetailInfoVehiculeComponent
      }
      ])
  ],
  providers: [GeneralData],
  bootstrap: [AppComponent]
})
export class AppModule {

}
