import React from "react";
import Profile from './body-components/Profile'
// import Timeline from './body-components/Timeline'
// import SuggestedToFollow from './body-components/SuggestedToFollow'
import Barnum from './../images/barnum.jpeg';
import DogPicture from './../images/dog.jpg';
import Trends from './body-components/Trends';

const Body = () => {
    return (
        <React.Fragment>
            <Profile
                profileBanner={Barnum}
                profilePic={DogPicture}
                displayName="Franklin T. Dog"
                username="funnyclowndog1"
                tweets="16000"
                following="135"
                followers="3133"
            />
            <Trends 
                location="Portland"
                // location
                // list #
            />

            {/* <Timeline /> */}
            {/* <SuggestedToFollow /> */} 
        </React.Fragment>
    )
}

export default Body;