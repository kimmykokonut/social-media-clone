import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "../ProfilePicture";

const Tweet = (props) => {
    return(
        <div>
            <tr>
                <td>
                    <ProfilePicture 
                        src={props.image}
                        size="50px"
                        alt={props.userName}
                    />
                </td>
                <td>
                    <p>{props.displayName}</p>                
                </td>
                <td>
                    <p>{props.userName}</p>
                </td>
            </tr>
            <tr>
                <p>{props.tweetText}</p>
            </tr>
            <tr>
                <td>Replies: {props.replies}</td>
                <td>Retweets: {props.retweets}</td>
                <td>Likes: {props.likes}</td>
            </tr>
            <hr />
        </div>
    )
}

Tweet.propTypes = {
    image: PropTypes.string,
    displayName: PropTypes.string,
    userName: PropTypes.string,
    tweetText: PropTypes.string,
    replies: PropTypes.string,
    retweets: PropTypes.string,
    likes: PropTypes.string
}

export default Tweet;