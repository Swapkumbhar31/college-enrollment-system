import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
