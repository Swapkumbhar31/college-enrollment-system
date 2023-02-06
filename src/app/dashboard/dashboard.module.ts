import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StudentsComponent } from './students/students.component';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ComponentsModule} from "../components/components.module";
import { ClassesComponent } from './classes/classes.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    StudentsComponent,
    LayoutComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    ComponentsModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
