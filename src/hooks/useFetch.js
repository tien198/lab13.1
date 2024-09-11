
import { useEffect, useState } from 'react'

export function useFetch(fetchFn, initialData) {
    const [tasks, setTasks] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function gets() {
            try {
                const tasks = await fetchFn()
                const fetchedTask = Object.entries(tasks).map(e => {
                    return { id: e[0], value: e[1] }
                })
                setTasks(fetchedTask)
            }
            catch (err) {
                console.log(err.message)
                setError({ message: err.message })
            }
            setIsLoading(false)

        }
        gets()
    }, [])
    return { tasks, isLoading, error }
}