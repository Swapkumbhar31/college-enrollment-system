import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {StudentsComponent} from './students/students.component';
import {LayoutComponent} from './layout/layout.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ComponentsModule} from "../components/components.module";
import {ClassesComponent} from './classes/classes.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {AddStudentComponent} from './add-student/add-student.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {AddEnrollmentComponent} from "./add-enrollment/add-enrollment.component";
import {EnrollmentsComponent} from "./enrollments/enrollments.component";
import {MatSelectModule} from "@angular/material/select";
import {AddClassComponent} from "./add-class/add-class.component";
import {StudentClassesListComponent} from './student-classes-list/student-classes-list.component';
import {ClassStudentListComponent} from './class-student-list/class-student-list.component';

@NgModule({
  declarations: [
    StudentsComponent,
    LayoutComponent,
    ClassesComponent,
    AddStudentComponent,
    AddEnrollmentComponent,
    EnrollmentsComponent,
    AddClassComponent,
    StudentClassesListComponent,
    ClassStudentListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    ComponentsModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class DashboardModule {
}
