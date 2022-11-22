import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    BooksComponent,
    EditbookComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
