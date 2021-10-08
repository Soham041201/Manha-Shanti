import React from 'react'
import TeamCard from '../components/TeamCard'
export default function Team() {
    return (
        <div>
            <div className="our-team m-8 ">
            <h1 className="text-5xl text-white  font-bold">Our Team</h1>
            <TeamCard img="https://avatars.githubusercontent.com/u/79072777?v=4" name="Soham Sattigeri" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mo"/> 
            <TeamCard img="" name="Vaishnavi Deshpande" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mo"/> 
            </div>
            
        </div>
    )
}
