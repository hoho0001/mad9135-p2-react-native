import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import StarRating from 'react-native-star-rating';
 
export default function Stars (props) {

    console.log(props.rating)
    let stars = JSON.parse(props.rating)
 
    return (

            <StarRating
                disabled={true}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={stars}
                fullStarColor={'orange'}
                starSize = {24}

            />



    );

}
