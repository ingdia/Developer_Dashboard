import { useState, useEffect } from "react"

export default function useFetch(url){
    const [mydata, setData]= useState([]);
    const [isloading, setIsLoading]= useState(true);
    const [err, setErr] = useState(true);

    useEffect(()=>{
       fetch(url)
         .then(res=> {
            if(!res.ok){
                throw Error("th fetching is failing")
            }
            return res.json()
         })
         .then((data)=>{
            setData(data);
            setIsLoading(false); 
         })
         .catch(error =>
            {
            setErr(error);
            setIsLoading(false)

         }
         )
     
    },[url])
    return {mydata, err, isloading}
}