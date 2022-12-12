import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/partial/sidenav/sidenav.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { BodyComponent } from './components/partial/body/body.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelMenuComponent } from './components/partial/sidenav/sublevel-menu.component';

import {OverlayModule} from '@angular/cdk/overlay';

import { TranslateModule , TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';
import { BannerComponent } from './components/partial/banner/banner.component';
import { BlogPostComponent } from './components/partial/blog-post/blog-post.component';
import { CalihousingComponent } from './components/pages/calihousing/calihousing.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    SublevelMenuComponent,
    BannerComponent,
    BlogPostComponent,
    CalihousingComponent
  ],
  imports: [

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    ReactiveFormsModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
