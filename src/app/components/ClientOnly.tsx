'use client';
import {useState, useEffect} from 'react'

interface ClientOnlyChildren {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyChildren> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(()=>{
        setHasMounted(true)
    },[])

    

    if(!hasMounted){
        return null
    }

    return(
        <>
            {children}     
        </>
    )
}

export default ClientOnly;
