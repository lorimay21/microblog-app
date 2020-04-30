import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  // angular.module('MyApp', []);

  // .controller('MyCtrl', [
  //   function() {
  //     angular.element(document).ready(function () {
  //       document.getElementById('msg').innerHTML = 'Hello';
  //     });
  //   }
  // ]);
}
