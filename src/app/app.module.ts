import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {RecipesModule} from './components/recipes/recipes.module';
import {ShoppingListModule} from './components/shopping-list/shopping-list.module';
import {CoreModule} from './core/core.module';
import {HttpInterceptorService} from './core/http-interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
