import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Pagina02Component } from './pagina02/pagina02.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina01Component,
    Pagina02Component,
    UsersComponent,
    CreateUserComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
