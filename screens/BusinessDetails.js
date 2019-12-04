import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default class BusinessDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.getParam('business')
    return { title }
  }

  render() {
    const business = this.props.navigation.getParam('business')

    return (
      <Container>
        <Content style={s.container}>
          <Text style={s.name}>{business.name}</Text>
          <Text style={s.phone}>Phone: {business.display_phone}</Text>
          <Text style={s.address}>Address: {business.location.display_address}</Text>
          <Text style={s.distance}>Distance: {(business.distance/1000).toFixed(2)} km</Text>
          <Text style={s.rating}>Rating: {business.rating}</Text>
          <Text style={s.rating}>Price: {business.price}</Text>
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  container: { padding: 24 }, 
  name: { fontSize: 24, fontWeight: '600'},
  phone: { marginTop: 12, color: '#777' },
  address: { }
})