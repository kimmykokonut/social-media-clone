import React from "react";
import ProfilePicture from "../ProfilePicture";
import PropTypes from 'prop-types';

function Profile(props){
    const profileStyling = {
        width: '33vw',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '1px solid black'
    }
    const profileBannerStyling = {
        width: '100%',
        overflow: 'hidden',
        height: '100px'
    }
    const profileAboutStyling = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-evenly',
        top: '-50px',
    }
    const usernameStyling = {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '0',
        margin: '0'
    }
    const userPropsStyling = {
        position: 'relative',
        top: '-50px',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
    return(
        <React.Fragment>
            <div style={profileStyling}>
            <img style={profileBannerStyling} src={props.profileBanner} alt="profile banner"></img>
            <tr style={profileAboutStyling}>
                <td>
                    <ProfilePicture
                        src={props.profilePic}
                        size="100px"
                        alt="Your Profile"
                        />
                </td>
                <td style={usernameStyling}>
                    <h3>{props.displayName}</h3>
                    <h4>@{props.username}</h4>
                </td>
            </tr>
            <tr style={userPropsStyling}>
                <td>
                    <h5>Tweets</h5>
                    <p>{props.tweets}</p>
                </td>
                <td>
                    <h5>Following</h5>
                    <p>{props.following}</p>
                </td>
                <td>
                    <h5>Followers</h5>
                    <p>{props.followers}</p>
                </td>
            </tr>
            </div>
        </React.Fragment>
    )
}

Profile.propTypes = {
    profilePic: PropTypes.string,
    profileBanner: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    tweets: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number
}

export default Profile;
