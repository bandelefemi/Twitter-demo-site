import React, { useState} from "react";
import axios from "axios";
// import { Button, Form } from "semantic-ui-react";


export default function Create(props){

    const [tweet, setTweet] = useState('')
    const [time, setTime] = useState('')
    const [count, setCount] = useState(0)

    const postData=()=> {

        axios.post(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData`, {
            tweet,
            time
        })
        .then(()=> {
            props.getData()
        })
        .then(()=> {
            
            document.getElementById("text-area").value=""
            
        })
        .then(()=> {
            setTweet(null)
        })
    }

    function handleChange(e){
        // e.preventDefault()
        setCount(e.target.value.length)
        setTweet(e.target.value)
        setTime(postTime)
    }

    const times = new Date()

    const postTime = times
    .toLocaleString('en-US', {
        month: "short", 
        day: "2-digit", 
        year: "numeric", 
        hour: 'numeric', 
        hour12: true, 
        minute: "2-digit"})

    return(
        <div className="tweet-container">
            <form className="create-tweet">
                
                {/* <label>User Input</label> */}
                <textarea 
                    onChange={handleChange}
                    className="form-field"
                    placeholder="Say something.."
                    type="textarea"
                    maxLength='250'
                    id="text-area"
                    />
                    
                
                <button 
                    onClick={postData} 
                    disabled={!tweet}
                    className={tweet? "form-button" : "form-button disabled"} 
                    type="button">Tweet</button>
            </form>
            <div className="counter">{250-count}</div>
        </div>
    )
}