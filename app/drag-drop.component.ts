import { Component, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';

const containerSize: number = 320;
const draggableHeight: number = 50;
const draggableWidth: number = 100;

@Component({
    selector: 'drag-drop',
    template: `
        <h1>Drag 'n Drop</h1>
        <div #container 
             class="container"
             (mousemove)="onMouseMove($event)">
            <div #draggable 
                 class="draggable"
                 (mousedown)="onMouseButton($event)"
                 (mouseup)="onMouseButton($event)">
            </div>
        </div>`,
    styles: [`
        .container {
            height: ${containerSize}px;
            width: ${containerSize}px;
            background-color: LightGray;
        }
        .draggable {
            height: ${draggableHeight}px;
            width: ${draggableWidth}px;
            background-color: FireBrick;
            position: absolute;
            cursor: move;
        }
    `]
})

export class DragDropComponent implements OnInit {

    @ViewChild('container') private containerElement: ElementRef;
    @ViewChild('draggable') private draggableElement: ElementRef;

    private boundary: any = {};
    private draggable: any;
    private isMouseDown = false;

    constructor(private renderer: Renderer) {}

    ngOnInit() {
        this.draggable = this.draggableElement.nativeElement;

        const container = this.containerElement.nativeElement;
        this.boundary = {
            left : container.offsetLeft + (draggableWidth / 2),
            right : container.clientWidth + container.offsetLeft - (draggableWidth / 2),
            top : container.offsetTop + (draggableHeight / 2),
            bottom : container.clientWidth + container.offsetTop - (draggableHeight / 2),
        }
    }

    private onMouseButton(event: MouseEvent): void {
        this.isMouseDown = event.buttons === 1;
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.isMouseDown && this.isInsideBoundary(event)) {
            this.renderer.setElementStyle(this.draggable, 'left', event.clientX - (draggableWidth / 2) + "px");
            this.renderer.setElementStyle(this.draggable, 'top', event.clientY - (draggableHeight / 2) + "px");
        }
    }

    private isInsideBoundary(event: MouseEvent) {
        return event.clientX > this.boundary.left &&
            event.clientX < this.boundary.right &&
            event.clientY > this.boundary.top &&
            event.clientY < this.boundary.bottom;
    }
}