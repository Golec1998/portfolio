import React from 'react'

import "./info.css"
import photo from "../media/image/photo_alpha.png"

function Info() {

    let selectInfo = () => {
        document.getElementById('')
    }

    let selectSkills = () => {
        
    }

    return (
        <div id='info'>
            <img src={photo} alt="" />
            <div>
                <button id='selectInfoButton' onClick={selectInfo}>Info</button>
                <button id='selectSkillsButton' onClick={selectSkills}>Skills</button>
            </div>
            <div id='personalBox'>
                <div id='infoBox'>
                    info
                </div>
                <div id='skillsBox'>
                    skills
                </div>
            </div>
        </div>
    )
}

export default Info;