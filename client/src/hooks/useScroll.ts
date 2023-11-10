import { useEffect, useState } from 'react';


export const useScroll = () => {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.document.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })

        return () => removeEventListener('scroll', () => {
            console.log('remove')
        })
    }, [])

    return {
        scrollY
    }
}

