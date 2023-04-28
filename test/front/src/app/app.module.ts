import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent},
      { path: 'main', component: TopBarComponent},
      { path: 'product-page', component: ProductsPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
