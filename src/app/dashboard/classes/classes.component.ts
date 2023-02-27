import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AddClassComponent} from "../add-class/add-class.component";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: []
})
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'timing', 'room_id', 'action'];
  dataSource$: any[] = [];

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.store.collection('classes').valueChanges({idField: 'firebase_id'}).subscribe({
      next: value => {
        this.dataSource$ = value;
      }
    });
  }

  addStudent() {
    this.dialog.open(AddClassComponent, {
      width: '50%'
    });
  }

  delete(student: any) {
    if (confirm("Do you really want to delete student?")) {
      this.store.collection('classes').doc(student.firebase_id).delete().then(r => {

      });
    }
  }

  edit(student: any) {
    this.dialog.open(AddClassComponent, {
      width: '50%',
      data: student
    });
  }
}
