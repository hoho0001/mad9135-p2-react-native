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
          <Text style={s.title}>{business.name}</Text>
          <Text style={s.released}>Phone {business.phone}</Text>
          <Text style={s.rating}>{business.distance}</Text>
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  container: { padding: 24 }, 
  name: { fontSize: 24, fontWeight: '600'},
  phone: { marginTop: 12, color: '#777' },
  distance: { marginTop: 32 }
})