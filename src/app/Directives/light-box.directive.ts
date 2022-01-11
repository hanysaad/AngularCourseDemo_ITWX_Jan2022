import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  @Input('LightBox') hoverColor:string="yellow";
  @Input() defaultColor:string="gray";
  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style=`border: 3px ${this.defaultColor} solid`;
   }

   @HostListener('mouseover') onMouseOver()
   {
     console.log("color:" + this.hoverColor);
    this.elem.nativeElement.style=`border: 4px ${this.hoverColor} solid`;
   }

   @HostListener('mouseout') onMouseOut()
   {
    this.elem.nativeElement.style=`border: 3px ${this.defaultColor} solid`;
   }

}
