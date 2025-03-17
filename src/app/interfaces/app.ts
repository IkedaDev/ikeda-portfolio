

export interface ExperienceCard {
    title: string
    image: {
        src: string,
        withBackground?: boolean
    }
    description:string
    from:Date
    to:Date
}

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