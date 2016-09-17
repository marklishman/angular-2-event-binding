import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <mouse *ngIf="showSection('mouse')"></mouse>
        <drag-drop *ngIf="showSection('drag-drop')"></drag-drop>
        <keyboard *ngIf="showSection('keyboard')"></keyboard>
        `
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