//dependences
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdTabsModule, MdDialogModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderVehiculeComponent } from './component/header-vehicule/header-vehicule.component';
import { InfoVehiculeComponent } from './component/info-vehicule/info-vehicule.component';
//components

//views
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { GeneralInfoVehiculeComponent } from './component/general-info-vehicule/general-info-vehicule.component';
import { DetailInfoVehiculeComponent } from './component/detail-info-vehicule/detail-info-vehicule.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentComponent } from './component/new-comment/new-comment.component'
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
    NewCommentComponent
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
    MdTabsModule,
    RouterModule.forRoot([
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
