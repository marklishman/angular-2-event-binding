import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DragDropComponent } from "./drag-drop.component";
import { KeyboardComponent } from "./keyboard.component";
import { MouseComponent } from "./mouse.component";

@NgModule({
    imports:      [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        DragDropComponent,
        KeyboardComponent,
        MouseComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }