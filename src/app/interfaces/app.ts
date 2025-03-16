

export type ScreenSize = 'mobile' | 'tablet' | 'desktop' | null

export interface ServiceCard {
    image: string
    title: string
    description:string
}
export interface NavItem {
    path: string
    label: string
}