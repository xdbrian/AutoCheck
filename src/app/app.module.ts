//dependences
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
        MdCardModule,
        MdMenuModule, 
        MdToolbarModule,
        MdIconModule,
        MdInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderVehiculeComponent } from './component/header-vehicule/header-vehicule.component';
import { InfoVehiculeComponent } from './component/info-vehicule/info-vehicule.component';
//components

//views
import { HomeComponent } from './views/home/home.component'
import { DetailComponent } from './views/detail/detail.component'

//services
import { GeneralData } from './services/GeneralData.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderVehiculeComponent,
    InfoVehiculeComponent,
    HomeComponent,
    DetailComponent
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
        path : 'detail',
        component : DetailComponent
      }])
  ],
  providers: [GeneralData],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
