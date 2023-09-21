import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {NotesListComponent} from "./notes-list/notes-list.component";
import {AddNoteComponent} from "./add-note/add-note.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    imports: [CommonModule, HeaderComponent, NotesListComponent, AddNoteComponent, RouterModule]
})
export class AppComponent {
  title = 'courses-angular16';
}
