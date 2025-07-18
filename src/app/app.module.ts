import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatHomeComponent } from './ChatApplication/chat-home/chat-home.component';
import { ChatbotComponent } from './CommonPages/chatbot/chatbot.component';
import { AddCatogoryComponent } from './Ecommerice/add-catogory/add-catogory.component';
import { AddingProductComponent } from './Ecommerice/adding-product/adding-product.component';
import { AdminPageComponent } from './Ecommerice/admin-page/admin-page.component';
import { EcommHomeListComponent } from './Ecommerice/ecomm-home-list/ecomm-home-list.component';
import { EcommHomeComponent } from './Ecommerice/ecomm-home/ecomm-home.component';
import { ProductDetailComponent } from './Ecommerice/product-detail/product-detail.component';
import { LoginComponent } from './Login/login/login.component';
import { LoginPageComponent } from './Login/sigin/login-page.component';
import { HomeComponent } from './home/home.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomeComponent,
    LoginComponent,
    LoginPageComponent,
    AddingProductComponent,
    SubDashboardComponent,
    AddCatogoryComponent,
    ChatbotComponent,
    ProductDetailComponent,
    EcommHomeComponent,
    EcommHomeListComponent,
    ChatHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    CdkDrag,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    MatSliderModule,
    MatChipsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
