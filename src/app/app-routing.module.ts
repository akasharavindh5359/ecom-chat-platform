import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './ChatApplication/chat-home/chat-home.component';
import { AddCatogoryComponent } from './Ecommerice/add-catogory/add-catogory.component';
import { AddingProductComponent } from './Ecommerice/adding-product/adding-product.component';
import { EcommHomeListComponent } from './Ecommerice/ecomm-home-list/ecomm-home-list.component';
import { EcommHomeComponent } from './Ecommerice/ecomm-home/ecomm-home.component';
import { ProductDetailComponent } from './Ecommerice/product-detail/product-detail.component';
import { LoginComponent } from './Login/login/login.component';
import { LoginPageComponent } from './Login/sigin/login-page.component';
import { HomeComponent } from './home/home.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';

const routes: Routes = [
  {
    path: 'sigin',
    component: LoginPageComponent,
  },
  // {
  //   path:'bot',component:ChatbotComponent
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product',
    component: ProductDetailComponent,
  },
  {
    path: 'admin',
    component: SubDashboardComponent,
  },
  {
    path: 'addProduct',
    component: AddingProductComponent,
  },
  {
    path: '',
    component: EcommHomeComponent,
  },
  {
    path: 'ecomm/home/list',
    component: EcommHomeListComponent,
  },
  {
    path: 'addcat',
    component: AddCatogoryComponent,
  },
  {
    path: 'chatHome',
    component: ChatHomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
