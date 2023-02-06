import { useEffect, useState } from "react";


export const useGetData = (url: string) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(
            res => {
                if(!res.ok){
                    throw Error('Could not get data');
                }
                return res.json();
            }
        )
        .then(
            data => {
                setData(data);
                setIsPending(false);
                setError(null)

            }
        )
        .catch(
            err => {
                setIsPending(false)
                setError(err)
            }
        )
    }, [url]

    )

    return { data, isPending, error }

}