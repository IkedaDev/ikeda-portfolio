import * as React from 'react'


export const useWindowWidth = (): number => {

    const [ windowWidth, setWindowWidth ] = React.useState<number>(window.innerWidth)

    React.useEffect(()=>{

        function handleResize(){
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    },[])

    return windowWidth
}
