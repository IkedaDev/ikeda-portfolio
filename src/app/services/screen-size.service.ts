import { isPlatformServer } from '@angular/common';
import { computed, Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2, signal } from '@angular/core';
import { ScreenSize } from '@interfaces/app';


@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService{

  private width = signal<number | null>(null)
  private body = signal<HTMLElement | null>(null);

  private renderer: Renderer2 | null = null;

  public readonly isMobile = computed(() => this.screenSize() === 'mobile');
  public readonly isTablet = computed(() => this.screenSize() === 'tablet');
  public readonly isDesktop = computed(() => this.screenSize() === 'desktop');

  public readonly screenSize = computed<ScreenSize>(()=>{
    const width = this.width()
    if( !width ) return null
    if( width < 768) return 'mobile'
    if( width >= 768 && width < 1024 ) return 'tablet'
    return 'desktop'
  })

  constructor(
    @Inject(PLATFORM_ID) platformId: Object, 
    private rendererFactory: RendererFactory2,
  ) {
    if(isPlatformServer(platformId)) return;
    
    this.width.set(window.innerWidth)
    this.body.set(window.document.body)
    
    this.renderer = this.rendererFactory.createRenderer(null, null);
    
    this.updateBodyClass();
    window.addEventListener( 'resize' , () => {
      this.width.set(window.innerWidth)
      this.body.set(window.document.body)
      this.updateBodyClass();
    } )
    
  } 

  private updateBodyClass() {
    
    if( !this.renderer ) return;
    const screenSize = this.screenSize();
    this.renderer.removeClass(this.body(), 'app-mobile');
    this.renderer.removeClass(this.body(), 'app-tablet');
    this.renderer.removeClass(this.body(), 'app-desktop');

    if ( !screenSize ) return

    this.renderer.addClass(this.body(), `app-${screenSize}`); 
    
  }

}
