import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostagemComponent } from './postagem/postagem.component';
import { HeaderComponent } from './header/header.component';
import { MinipostComponent } from './minipost/minipost.component';
import { PostcompletoComponent } from './postcompleto/postcompleto.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentadorComponent } from './comentador/comentador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsuarioComponent,
    PostagemComponent,
    HeaderComponent,
    MinipostComponent,
    PostcompletoComponent,
    ComentarioComponent,
    ComentadorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'post/:id', component: PostcompletoComponent },
      { path: 'usuario', component: UsuarioComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
