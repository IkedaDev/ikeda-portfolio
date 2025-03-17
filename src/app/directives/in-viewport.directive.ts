import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, inject, input, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inViewport]',
})
export class InViewportDirective implements AfterViewInit  { 

  public readonly classToAdd = input<string>('visible')
  public readonly work = input<'every' | 'once'>('every')
  private readonly el = inject(ElementRef)
  private readonly renderer = inject(Renderer2)

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit(): void {
    if(isPlatformServer(this.platformId)) return
    const observer = new IntersectionObserver( (entries, obs) => {
      entries.forEach( entry => {

        if( !entry.isIntersecting ) {
          this.renderer.removeClass(this.el.nativeElement, this.classToAdd() )
          return 
        }
        
        this.renderer.addClass(this.el.nativeElement, this.classToAdd() )
        if (this.work() === 'once') {
          obs.unobserve(this.el.nativeElement);
        }
      })
    })
    observer.observe(this.el.nativeElement)
  }

}
