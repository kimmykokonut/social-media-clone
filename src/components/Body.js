import React from "react";
import Profile from './body-components/Profile'
import Trends from './body-components/Trends'
import Timeline from './body-components/Timeline'
import SuggestedToFollow from './body-components/SuggestedToFollow'

const Body = () => {
    return (
        <React.Fragment>
            <Profile />
            <Trends />
            <Timeline />
            <SuggestedToFollow />
        </React.Fragment>
    )
}

export default Body;