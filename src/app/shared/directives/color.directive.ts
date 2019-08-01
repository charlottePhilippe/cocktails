import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class ColorDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('style.color') color;
    @Input() textcolor = 'blue';
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

ngOnInit() {
    this.color = this.textcolor;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
}

@HostListener('click') click() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
}

@HostListener('mouseenter') mouseEnter($event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black')
}

@HostListener('mouseleave') MouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red')
}
}