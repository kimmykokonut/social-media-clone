import React from "react";
import PropTypes from 'prop-types';
import Hashtag from "./Hashtag";
const portlandTrends = [{
    trend: "dog",
    link: "https://en.wikipedia.org/wiki/Dog"
},
{
    trend: "rain",
    link: "https://en.wikipedia.org/wiki/Rain"
},
{
    trend: "clowns",
    link: "https://en.wikipedia.org/wiki/Clown"
},
{
    trend: "BarnumAnimalCrackers",
    link: "https://en.wikipedia.org/wiki/Animal_cracker"
}]

function Trends(props){
    return(
        <React.Fragment>
            <h3>{props.location} Trends</h3>
            {
                portlandTrends.map((tag) => {
                    return(
                    <Hashtag
                        name={tag.trend}
                        link={tag.link}
                    />)
                })
            }
        </React.Fragment>
    )
}

Trends.propTypes = {
    location: PropTypes.string,
    list: PropTypes.string
}

export default Trends;