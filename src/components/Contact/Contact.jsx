import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'


export const Contact = () => {
    return (
        <>
            <div className="mainContact">
                <Link to='/'>
                <div className="backHome">
                    <span style={{ fontSize: '70px' }}>&#8592;</span>
                </div>
                </Link>
                <div className="contactDesc">
                    Feel free to contact us !
                </div>

                <div className="iconSection">
                    <a href="https://www.linkedin.com/in/daksh-maheshwari-157712238/" class="fa fa-linkedin"></a>
                    <a href="https://github.com/dakshmaheshwari19" class="fa fa-github"></a>
                    <a href="https://www.instagram.com/19_daksh" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-google"></a>
                </div>
            </div>

        </>
    )
}
