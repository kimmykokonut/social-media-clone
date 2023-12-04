import React from "react";
import Button from "./Button";
import Search from "./Search";
import ProfilePicture from "./ProfilePicture";
import DogPicture from "./../images/dog.jpg";

function Header(){
    const headerStyling = {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '1px solid black'
    }
    return(
        <React.Fragment>
            <div style={headerStyling}>
            <Button 
                id="home"
                text="Home"
            />
            <Button 
                id="notifications"
                text="Notifications"    
            />
            <Button 
                id="messages"
                text="Messages"
            />
            <Search 
                id="search"
                placeHolder="Search Twitter"
                name="searchBox"
                />
            <ProfilePicture
                src={DogPicture}
                size="50px"
                alt="Your Profile"
            />
            <Button
                id="tweet"
                text="Tweet" 
                />
            </div>
        </React.Fragment>
    );
}

export default Header;