import { SkillsComponent } from './../views/skills/skills.component';
import { ExperienceComponent } from './../views/experience/experience.component';
import { NavComponent } from './../components/nav/nav.component';
import { TypePanelComponent } from './../components/type-panel/type-panel.component';
import { SocialNetworksComponent } from './../components/social-networks/social-networks.component';
import { InfoComponent } from './../views/info/info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    SocialNetworksComponent,
    TypePanelComponent,
    NavComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
