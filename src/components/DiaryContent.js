import React from 'react'
import { useParams } from "react-router";
import mock from '../mock.json'
export default function DiaryContent(props){
    const {id} = useParams()
    return (
        <div>
        
            <article>
                <h2>{mock.blogs[id].title}</h2>
                <p>Written on<b>{props.date}</b>.</p>
                <div>{props.body}</div>
            </article>
        </div>
    )
}
