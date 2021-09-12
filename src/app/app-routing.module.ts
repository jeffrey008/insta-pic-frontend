import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], component: HomeComponent },
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'createPost', canActivate:[AuthGuard], component: CreatePostComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
