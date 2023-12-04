import React from "react";
import PropTypes from 'prop-types';

const ProfilePicture = (props) => {
    const profilePictureStyling = {
        border: '1px solid black',
        borderRadius: '10px'
    }
    return (
        <a href={props.href}>
            <img style={profilePictureStyling} src={props.src} alt={props.alt} width={props.size} height={props.size} />
        </a>
    )
}

ProfilePicture.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    href: PropTypes.string
}

export default ProfilePicture;