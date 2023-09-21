import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {NOTES} from "../interface/notes";

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {

  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find( i => i.id === this.id);
}
