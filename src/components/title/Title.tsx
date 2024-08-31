
interface Props{
    header: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    children: React.ReactNode,
}

export const Title: React.FC<Props> = ({header, children}: Props) =>{
    const Tag = header

    return(
        <Tag className="text-6xl font-bold">{children}</Tag>    
    )
}