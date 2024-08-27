

export class DeviceDetector {
    private readonly tabletSize: number = Number(import.meta.env.VITE_TABLET_SIZE);
    private readonly desktopSize: number = Number(import.meta.env.VITE_DESKTOP_SIZE);

    constructor(private readonly width: number) {}

    isMobile() {
        return this.width < this.tabletSize; 
    }

    isTablet() {
        return this.width >= this.tabletSize && this.width < this.desktopSize;
    }

    isDesktop() {
        return this.width >= this.desktopSize; 
    }
}