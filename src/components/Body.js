import React from "react";
import Profile from './body-components/Profile'
import Timeline from "./body-components/Timeline";
import SuggestedToFollow from './body-components/SuggestedToFollow'
import Barnum from './../images/barnum.jpeg';
import DogPicture from './../images/dog.jpg';
import Trends from './trend-components/Trends';

const Body = () => {
    return (
        <React.Fragment>
            <tr>
                <td>
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
                    />

                </td>
                <td>
                    <Timeline
                        profilePic={DogPicture}
                    />
                </td>
                <td>
                    <SuggestedToFollow />
                </td>
            </tr>

        </React.Fragment>
    )
}

export default Body;