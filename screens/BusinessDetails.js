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
    return (
      <Container >
        <Content style={s.container} >
          <Text style={s.name}>{business.name}</Text>
          <Image
            style={{flex: 1, width: 300, height: 200, alignSelf: "center", marginBottom: 20, borderRadius: 100, overflow: "hidden"}}
            source={ business.image_url === ""
              ? require('../assets/yelpLogo.png')                      
              : {uri: business.image_url}

            }
          />
          <Stars style={s.stars} rating={business.rating}/>     
          <Text style={s.address}>Address: {business.location.address1}</Text>
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

  container: { flex: 1, padding: 24, fontSize: 20,backgroundColor: '#ffffff', color: '#000000', alignContent:"center" }, 
  name: { fontSize: 30, fontWeight: '600', marginBottom:24, alignSelf: "center", color: 'blue'},
  // phone: { marginTop: 12, color: 'white', marginBottom: 12 },
  address: { marginTop: 10, color:'#000', fontSize: 18, marginBottom:10, fontWeight: '600'  },

  stars: {margin: 24, padding: 16, alignSelf: "center", alignContent:"center", alignItems: "center"}

})