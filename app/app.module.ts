import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostcardComponent } from './postcard/postcard.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { Postcard1Component } from './postcard1/postcard1';
import {PostcardcontentComponent} from './postcard-content/postcard-content';
import {Postcard1contentComponent} from './postcard1-content/postcard1-content';
import {ProfileimageComponent} from './profileimage/profileimage';
import { BindingComponent } from './binding/binding.component';
import { PostserviceService } from './postservice.service';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'profilepage', component: ProfilepageComponent },
  { path: 'profileimage', component: ProfileimageComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: '',   redirectTo: '/loginpage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    Postcard1Component,
    PostcardcontentComponent,
    Postcard1contentComponent,
    BindingComponent,
    WallpaperComponent,
    ProfilepageComponent,
    LoginpageComponent,
    PageNotFoundComponent,
    ProfileimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
