import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const Search = (props) => {
    return(
        <form id={props.id} placeHolder={props.placeHolder} name={props.name}>
        <input type="text" name={props.name} placeHolder={props.placeHolder}></input>
        <Button
            id="search"
            text={props.btnText}
        />
        </form>
    )
}

Search.propTypes = {
    id: PropTypes.string,
    placeHolder: PropTypes.string,
    name: PropTypes.string,
    btnText: PropTypes.string
}

export default Search;