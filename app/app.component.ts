import { Component } from '@angular/core';

import { MouseComponent } from "./mouse.component";
import { KeyboardComponent } from "./keyboard.component";
import { DragDropComponent } from "./drag-drop.component";

@Component({
    selector: 'app',
    template: `
        <mouse *ngIf="showSection('mouse')"></mouse>
        <drag-drop *ngIf="showSection('drag-drop')"></drag-drop>
        <keyboard *ngIf="showSection('keyboard')"></keyboard>
        `,
    directives: [
        MouseComponent,
        KeyboardComponent,
        DragDropComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}