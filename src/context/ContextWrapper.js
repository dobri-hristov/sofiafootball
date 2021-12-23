import React, { createContext, useState, useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export const AuthContext = createContext({
    locations: '',
    isLoaded: false
})

const ContextWrapper = (props) => {
    const [locations, setLocations] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const db = getDatabase();

    useEffect(() => {
        if (!isLoaded) {
            onValue(ref(db, 'locations'), (snapshot) => {
                setLocations(snapshot.val())
                setIsLoaded(true)
            })
        }
    }, [db, isLoaded])

    return (

        <AuthContext.Provider value={{ locations, isLoaded }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextWrapper
