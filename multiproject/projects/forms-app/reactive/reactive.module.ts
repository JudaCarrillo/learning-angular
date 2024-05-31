import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { ReactiveRoutingModule } from './reactive-routing.module';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
  ],
  imports: [CommonModule, ReactiveRoutingModule],
})
export class ReactiveModule {}