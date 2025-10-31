import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [mydata, setData] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching failed");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
        setIsLoading(false);
      });
  }, [url]);


//   try{

//     useEffect(()=>{
//     const response = fetch(url);
//     if(!response){
//       throw Error("fetching failing")
//     }
//     const data= response.json;
//         setData(data);
//         setIsLoading(false)
//     },[url])
//   }

//   catch(error){
//      setErr(error.message);
//      setIsLoading(false)
//   }
  return { mydata, err, isloading };
}


