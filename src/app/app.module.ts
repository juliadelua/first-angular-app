// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Pages components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'numbers', component: NumbersComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NumbersComponent,
    AboutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// All declarations we want to use inside app folder
// AppModule is used for routing in this app
// The point of this single-page-application is to SIMULATE
// navigation, rather than actually moving between different pages.

//Right click app folder and use generator for a quick and easy component

//forRoot will base the router on the root, they are configured by typescript objects
