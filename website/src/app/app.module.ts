import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';                   //two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { SortListPipe } from './sort-list.pipe';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule} from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutUsComponent,
    CategoriesComponent,
    ContactComponent,
    SortListPipe,
    PostComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
