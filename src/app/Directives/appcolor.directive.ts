import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppcolor]'
})
export class AppcolorDirective {

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor!: string;

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'default'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='white'
     this.bgcolor = 'black'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='blue'
    this.bgcolor = 'lightblue'

  }
}
