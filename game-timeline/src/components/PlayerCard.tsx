import React from 'react'
import { Player } from '../models/Player'

const PlayerCard = ({ company, title, subtitle, image, description, date }: Player) => {
    return (
        <div className="Container">
            {/* <div className="tags">{tags.join(' # ')}</div> */}
            <div className="profile_pic">
                <img src={image} alt="ppic" />
            </div>
            <div className="profile_data">
                <div className="row_one">
                    <h3>Name : {title} </h3> <h3> LastName: {subtitle}</h3>
                    <h3>Company : {company}</h3> <h3> Year : {date}</h3>
                </div>
            </div>
            <div className="player_description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PlayerCard
