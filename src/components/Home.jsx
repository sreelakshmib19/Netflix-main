import React from 'react'
import Navabar from './Navabar'
import Banner from "./Banner"
import List from './List'
import "./home.css"
// import "./Series"
import { actionUrl, comedyUrl, horrorUrl, thrillerUrl,animationUrl,dramaUrl} from "../constants/constant"
import Series from './Series'

function Home() {
    return (
        <div className='home'>
            <Navabar />
            <Banner />
        
            <List url={actionUrl} title="Netflix Originals" />
            <List url={actionUrl} title="Action" smallCard />
            <List url={thrillerUrl} title="Thriller" />
            <List url={comedyUrl} title="Comedy" smallCard />
            <List url={horrorUrl} title="Horror" smallCard />
            <List url={animationUrl} title="animationUrl" smallCard />
            <List url={dramaUrl} title="dramanUrl" smallCard />
            <Series/>
        </div>
    )
}

export default Home