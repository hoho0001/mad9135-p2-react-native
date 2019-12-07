import React, { Component } from 'react'
import { Container, Content, Text} from 'native-base'
import { StyleSheet, View, Image} from 'react-native'
import Stars from './Stars'

export default class BusinessDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.getParam('business')
    return { title }
  }

  render() {
    const business = this.props.navigation.getParam('business')
    console.log(business)

    return (
      <Container >
        <Content style={s.container} >
          <View>
          <Image
          style={{width: 100, height: 100}}
          source={{uri: business.image_url }}
        />
          </View>
          <Text style={s.name}>{business.name}</Text>
          <Text style={s.address}>Street Address: {business.location.address1}</Text>
          <Text style={s.address}>City: {business.location.city}</Text>
          <Text style={s.address}>State/Province: {business.location.state}</Text>
          <Text style={s.address}>Country: {business.location.country}</Text>
          <Text style={s.phone}>Phone: {business.display_phone}</Text>
          <Text style={s.distance}>Distance: {(business.distance/1000).toFixed(2)} km</Text>
          {/* <Text style={s.rating}>Rating: {business.rating}</Text> */}
          <Text style={s.rating}>Price: {business.price}</Text>
          <View style={{padding:30}}> 
            <Stars style={s.stars} rating={business.rating}/>
          </View>          
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  container: { padding: 24, fontSize: 20 }, 
  name: { fontSize: 24, fontWeight: '600'},
  phone: { marginTop: 12, color: '#777', marginBottom: 12 },
  address: { marginTop: 12 },
  distance: {marginBottom: 12 , marginTop: 12},
  stars: { marginBottom: 12 , marginTop: 12, padding:24}

})