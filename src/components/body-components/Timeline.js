import React from 'react';
import ProfilePicture from '../ProfilePicture';
import DogPicture from './../../images/dog.jpg';
import Search from '../Search';
import { TweetList } from './TweetList';

const Timeline = ()=> {
    return (
        <React.Fragment>
            <ProfilePicture
            src={DogPicture}
            size="50px"
            alt="Your Profile"/>
            <form >
            <Search 
                id="post"
                placeHolder="What's happening?"
                name="postBox"
                btnText="Tweet"
                />
            </form>
            <TweetList />
        </React.Fragment>
    )
}

export default Timeline;