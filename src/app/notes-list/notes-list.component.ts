import { Component } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {NOTES} from "../interface/notes";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
 notes = NOTES;

 show( title: string) {
   alert( title );
 }
}
