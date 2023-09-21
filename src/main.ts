import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {provideRouter, Routes} from "@angular/router";
import {NotesListComponent} from "./app/notes-list/notes-list.component";
import {AddNoteComponent} from "./app/add-note/add-note.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {NoteDetailComponent} from "./app/note-detail/note-detail.component";


const routes: Routes = [
  { path: '', component: NotesListComponent},
  { path: 'new', component: AddNoteComponent},
  { path: 'note/:id', component: NoteDetailComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
