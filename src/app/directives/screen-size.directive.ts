import { Directive, inject, OnInit, Renderer2 } from '@angular/core';
import { ScreenSizeService } from '../services';

@Directive({
  selector: '[screenSize]',
})
export class ScreenSizeDirective  { 

  private screenSizeService = inject(ScreenSizeService)
  private renderer: Renderer2 = inject(Renderer2)
  private body = document.body


  constructor(){

  }
}
