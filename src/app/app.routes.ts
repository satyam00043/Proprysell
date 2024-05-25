import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SellerComponent } from './seller/seller/seller.component';
import { PostComponent } from './seller/post/post.component';
import { EditComponent } from './seller/edit/edit.component';
import { BuyerComponent } from './buyer/buyer/buyer.component';
import { DetailsComponent } from './buyer/details/details.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    { path: 'register',component:RegisterComponent},
    {path:'seller/seller',component:SellerComponent},
    {path:'seller/post',component:PostComponent},
    {path:'seller/edit/:id',component:EditComponent},
    {path:'buyer/buyer',component:BuyerComponent},
    {path:'buyer/property/:id',component:DetailsComponent},
   


];
