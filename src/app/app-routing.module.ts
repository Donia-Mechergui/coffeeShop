import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{ path:'',component:HomeComponent},
  { path:'menu',component:MenuComponent},
  { path:'about',component:AboutComponent},
  { path:'product',component:ProductComponent},
  { path:'review',component:ReviewComponent},
  { path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
