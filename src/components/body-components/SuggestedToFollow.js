import React from 'react';
import { tweeters } from './TweetList';
import AccountFollow from './AccountFollow';

const SuggestedToFollow = () => {
    return(
        <React.Fragment>
            <h3>Who to follow </h3>
            {tweeters.map((account) => {
                return(
                    <AccountFollow 
                        image={account.image}
                        displayName={account.displayName}
                        userName={account.userName} 
                    />
                )
            })}
        </React.Fragment>
    )
}

export default SuggestedToFollow;