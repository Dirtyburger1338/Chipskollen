import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { MaterialModule} from './material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin-dashboard/admin.component';
import { SnacksComponent } from './pages/snacks/snacks.component';

import { RouteGuardService } from './services/route-guard.service';
import { dataAccessService } from './services/data-access.service';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("922929471642-c4nn932uc17b54ku3q2o0gcng3d8q3kg.apps.googleusercontent.com")
    }
    // ,
    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider("Facebook-App-Id")
    // },
    // {
    //   id: LinkedInLoginProvider.PROVIDER_ID,
    //   provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
    // }
]);

export function provideConfig() {
    return config;
}

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Hem', component:HomeComponent},
    { path: 'Profil', component: ProfileComponent, canActivate: [RouteGuardService]},
    { path: 'Admin', component: AdminComponent, canActivate: [RouteGuardService]},
    { path: 'Snacks', component: SnacksComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginInputComponent,
        ProfileComponent,
        AdminComponent,
        SnacksComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SocialLoginModule    
    ],
    entryComponents: [LoginInputComponent],
    providers: [
        RouteGuardService,
        { 
            provide: AuthServiceConfig,
            useFactory: provideConfig 
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
