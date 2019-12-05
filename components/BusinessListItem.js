import React from 'react'
import {ListItem, Body, Text, Right, Button, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

// Destructure the business object and the navigate function from props.
const BusinessListItem = ({ business, navigation: { navigate } }) => (
  
  <ListItem>
    <Body>
      <Text style={{fontSize: 20}}>
        {business.name}
      </Text>
      <Text style={{fontSize: 14, color: '#777'}}>
        {(business.distance/1000).toFixed(2)} km
      </Text>
    </Body>
    <Right>
      <Button 
        transparent
        onPress={() => navigate('BusinessDetail', { business })} > 
        <Icon name="arrow-forward" />
      </Button>
    </Right>
  </ListItem>
)

// This uses the higher order component design pattern.
// See https://reactjs.org/docs/higher-order-components.html
// The withNavigation function returns our BusinessListItem component
// with the navigation object injected as a prop.
export default withNavigation(BusinessListItem)