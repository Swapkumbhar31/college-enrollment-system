import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {LayoutComponent} from "./layout/layout.component";
import {ClassesComponent} from "./classes/classes.component";
import {EnrollmentsComponent} from "./enrollments/enrollments.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'enrollments',
        component: EnrollmentsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
