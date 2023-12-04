import React from 'react';
import ProfilePicture from '../ProfilePicture';
import PropTypes from 'prop-types';
import Button from '../Button';

const AccountFollow = (props) => {
    const accountFollowStyle = {
        display: 'flex',
        alignItems: 'flex-start'
    }
    
    return(
        <React.Fragment>
            <tr style={accountFollowStyle}>
                <td>
            <ProfilePicture
                src={props.image}
                size="50px"
            />
            </td>
            <td style={{
                marginLeft: '10px'
            }}>
                <p style={{
                margin: '0',
                marginBottom: '5px'
            }}>{props.displayName} {props.userName}</p>
                <Button  
                id="follow"
                text="Follow"
                />
            </td>
            </tr>
            <hr/>
        </React.Fragment>
    )
}

AccountFollow.propTypes = {
    image: PropTypes.string,
    displayName: PropTypes.string,
    userName: PropTypes.string,
}

export default AccountFollow;