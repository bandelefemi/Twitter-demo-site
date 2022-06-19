import React from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";

export default function ShowTweet(props) {

    // const setData=(data)=>{
    //     let {id, tweet, time} = data;
    //     localStorage.setItem("ID", id)
    //     localStorage.setItem("Tweet", tweet)
    //     localStorage.setItem("Time", time)
    // }

    const onDelete=(id)=> {
        axios.delete(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData/${id}`)
        .then(()=> {
            props.getData()
        })
    }

    const tweetElement = props.apiData.map((data)=> {
        return (
            <div className="tweet-data" key={data.id}>
                <div className="user-details">
                    <span>
                    <Icon.Group size='large'> 
                        <Icon name='user' /> 
                    </Icon.Group>
                    </span>
                    <span className="user-name">Bandele F</span> 
                    <span className="handle">@bandele</span>
                </div>
                <div>
                    {data.tweet}
                </div>
                <div className="tweet-panel">
                    <div className="edit">
                        <Icon.Group size="large">
                            <Icon name="edit outline" style={{color: "#1dcaff"}}/>
                        </Icon.Group>
                    </div>
                    <div className="trash">
                        <Icon.Group size="large">
                            <Icon 
                                name="trash alternate outline" 
                                style={{color: "#1dcaff"}}
                                onClick={()=> onDelete(data.id)} />
                        </Icon.Group>
                    </div>
                    <div className="tweet-time">
                        {data.time}
                    </div>
                </div>
            </div>
        )
    }) 

    return(
        <div>
            {tweetElement}
        </div>
    )
}
