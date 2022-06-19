import React from "react";
// import {Icon} from 'semantic-ui-react'
import axios from "axios";
import { useState, useEffect } from "react";
import Create from "./createTweet";
import ShowTweet from "./readTweet";

export default function App() {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData`)

        .then((response)=> {
            setApiData(response.data)
        })
    }, [])

    const getData=()=> {
        axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData`)
        .then((getData)=> {
            setApiData(getData.data)
        })
    }


    return(

        <main>
            <div className="tweet-area">
                <Create getData={getData}/>

                <div>
                <ShowTweet apiData={apiData} getData={getData} />
            </div>
            </div>

            
            
        </main>
       
    )
}