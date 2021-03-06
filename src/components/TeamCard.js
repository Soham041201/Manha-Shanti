import React from 'react'

export default function TeamCard(props) {
    return (
        <div className="container-xl mx-auto mt-20 max-w-4xl min-h-min  p-10 rounded-lg flex space-x-4 bg-blue-300 bg-opacity-30">
            <div className="block-inline ">
            <img src={props.img} alt="" />
            </div>
            <div className="block-inline max-w-lg">
                <h1 className="text-4xl text-purple-900 ml-10 font-bold">{props.name}</h1>
                <h1 className="text-xl text-black-500 ml-10 mt-2 font-200">{props.description}</h1>
            </div>
        </div>
    )
}
