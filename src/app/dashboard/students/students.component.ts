import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddStudentComponent} from "../add-student/add-student.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {StudentClassesListComponent} from "../student-classes-list/student-classes-list.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: []
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'program', 'term', 'link', 'action'];
  dataSource$: any[] = [];

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.store.collection('students').valueChanges({idField: 'firebase_id'}).subscribe({
      next: value => {
        this.dataSource$ = value;
      }
    });
  }

  addStudent() {
    this.dialog.open(AddStudentComponent, {
      width: '50%'
    });
  }


  viewClasses(element: any) {
    this.dialog.open(StudentClassesListComponent, {
      width: '50%',
      data: element
    });
  }

  delete(student: any) {
    if (confirm("Do you really want to delete student?")) {
      this.store.collection('students').doc(student.firebase_id).delete().then(r => {

      });
    }
  }

  edit(student: any) {
    this.dialog.open(AddStudentComponent, {
      width: '50%',
      data: student
    });
  }
}
