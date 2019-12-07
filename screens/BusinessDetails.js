import React, { Component } from 'react'
import { Container, Content, Text} from 'native-base'
import { StyleSheet, Image} from 'react-native'
import Stars from './Stars'



export default class BusinessDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.getParam('business')
    return { title }
  }

  render() {
    const business = this.props.navigation.getParam('business')
    // console.log(business)



    return (
      <Container >
        <Content style={s.container} >
          <Text style={s.name}>{business.name}</Text>
          <Image
            style={{width: 200, height: 200, marginBottom: 24}}
            source={{uri: business.image_url }}
          />
          <Stars style={s.stars} rating={business.rating}/>     
          <Text style={s.address}>Street Address: {business.location.address1}</Text>
          <Text style={s.address}>City: {business.location.city}</Text>
          <Text style={s.address}>State/Province: {business.location.state}</Text>
          <Text style={s.address}>Country: {business.location.country}</Text>
          <Text style={s.address}>Phone: {business.display_phone}</Text>
          <Text style={s.address}>Distance: {(business.distance/1000).toFixed(2)} km</Text>
          {/* <Text style={s.rating}>Rating: {business.rating}</Text> */}
          <Text style={s.address}>Price: {business.price}</Text>          
        </Content>

      </Container>
    )
  }
}

const s = StyleSheet.create({

  container: { flex: 1, padding: 24, fontSize: 20,backgroundColor: '#EB715E', color: 'white', alignContent:"center"}, 
  name: { fontSize: 26, fontWeight: '600', marginBottom:24},
  // phone: { marginTop: 12, color: 'white', marginBottom: 12 },
  address: { marginTop: 12, color:'white', fontSize: 18, marginBottom:12, fontWeight: '600'  },
  // distance: {marginBottom: 12 , marginTop: 12},
  stars: {margin: 24, maxWidth:300, padding: 16}

})