import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';
import Lion from './../../images/lion.jpg';
import Tiger from './../../images/tiger.png';
import Dog from './../../images/dog.jpg';

export const tweeters = [{
    image: Tiger,
    displayName: "Tony T. Dog",
    userName: "@tigerDog",
    tweetText: "Grrrrreat!",
    replies: "",
    retweets: "1",
    likes: "5"
},
{
    image: Lion,
    displayName: "Leo T. Dog",
    userName: "@lionDog42",
    tweetText: "I do believe in clowns",
    replies: "2",
    retweets: "1",
    likes: "5"
},
{
    image: Dog,
    displayName: "Franklin T. Dog",
    userName: "@funnyclowndog1",
    tweetText: "Just bought #milk",
    replies: "434",
    retweets: "60",
    likes: "0"
}]

export const TweetList = () => {
    return(
        <React.Fragment>
        {
            tweeters.map((tweet) => {
                return(
                    <Tweet
                        image={tweet.image}
                        displayName={tweet.displayName}
                        userName={tweet.userName}
                        tweetText={tweet.tweetText}
                        replies={tweet.replies}
                        retweets={tweet.retweets}
                        likes={tweet.likes}
                    />
                )
            })
            }
        </React.Fragment>
    )
}

TweetList.propTypes = {
    image: PropTypes.string,
    displayName: PropTypes.string,
    userName: PropTypes.string,
    tweetText: PropTypes.string,
    replies: PropTypes.string,
    retweets: PropTypes.string,
    likes: PropTypes.string
}

// export TweetList;
