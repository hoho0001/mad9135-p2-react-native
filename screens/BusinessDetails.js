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
  

//    var Image = <Image
//   //  style={{width: 300, height: 200, marginBottom: 24}}
//   //  source={require('../assets/yelpLogo.png')}
//  />

//  let busPic = ""
//  if(business.image_url === "") {
//    Image.source = require('../assets/yelpLogo.png')
//    Image.sytle = {width: 300, height: 200, marginBottom: 24}
//  } else {
//    Image.source = {Uri: business.image_url}
//    Image.sytle = {width: 300, height: 200, marginBottom: 24}
//  }

    // (business.image_url === "")
    // ? icon = (require('../assets/yelpLogo.png'))
    // : icon = {uri: business.image_url}



    return (
      <Container >
        <Content style={s.container} >
          <Text style={s.name}>{business.name}</Text>
          <Image
            style={{flex: 1, width: 300, height: 200, alignSelf: "center", marginBottom: 20}}
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

  container: { flex: 1, padding: 24, fontSize: 20,backgroundColor: '#D9232D', color: 'white', alignContent:"center" }, 
  name: { fontSize: 26, fontWeight: '600', marginBottom:24, alignSelf: "center"},
  // phone: { marginTop: 12, color: 'white', marginBottom: 12 },
  address: { marginTop: 10, color:'white', fontSize: 18, marginBottom:10, fontWeight: '600'  },

  stars: {margin: 24, padding: 16, alignSelf: "center", alignContent:"center", alignItems: "center"}

})