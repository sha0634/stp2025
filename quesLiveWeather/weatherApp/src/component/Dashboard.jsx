import {useState,useEffect} from "react"
export default function Dashboard({place}){
    const[data,setData]=useState(null);

    const API_KEY= import.meta.env.VITE_WEATHER_API
    useEffect(()=>{
        setData(null)
        if(!place) return;
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${API_KEY}`).then((response)=>{
            if(!response.ok) console.log("Some error")
                return response.json()
            }).then((jsons)=>{
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${jsons[0].lat}&lon=${jsons[0].lon}&appid=${API_KEY}&units=metric`).then(
                    (res)=>{
                        if(!res.ok) console.log("some error in fetching data");
                        return res.json();
                    }).then(
                        (jsns)=>{
                            setData(jsns.main);
                        }).catch((er)=>{console.log(er)});}).catch((err)=>{console.log(err)})
    },[place])
    

    return (
            data && data.temp ? ( 
                <div>
                    <p>Tempreture: {data.temp}</p>
                    <p>Feels like: {data.feels_like}</p>
                    <p>Tempreture(min): {data.temp_min}</p>
                    <p>Tempreture(max): {data.temp_max}</p>
                </div>
            ):(
                <div>
                    {place === "" ? "" : "data is still loading"}
                </div>
            )
    )
}