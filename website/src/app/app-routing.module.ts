import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{path:'index',component:IndexComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'contact',component:ContactComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
