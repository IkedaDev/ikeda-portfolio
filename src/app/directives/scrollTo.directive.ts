import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[scrollTo]',
})
export class ScrollToDirective { 
  public sectionToScroll = input.required<string>();
  private readonly el = inject(ElementRef)

  @HostListener('click') onClick(){
    const targetElement = document.getElementById(this.sectionToScroll())
    if(targetElement){
      const targetPosition = targetElement.offsetTop
      console.log(targetPosition)
      window.scrollTo({ top: targetPosition - 100, behavior: 'smooth' })
    }
  }

}
