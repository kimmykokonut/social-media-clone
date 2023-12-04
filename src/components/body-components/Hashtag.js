import React from "react";
import PropTypes from "prop-types";

const Hashtag = (props) => {
    return (
        <a href={props.link}>
            <p>#{props.name}</p>
        </a>
    )
}

Hashtag.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}

export default Hashtag;