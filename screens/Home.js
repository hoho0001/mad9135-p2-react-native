import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import { Container, Content, Spinner, Button, Text } from 'native-base'
import BusinessListItem from '../components/BusinessListItem'

export default function Home() {
  const [businessList, setBusinessList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [where, setWhere] = useState({})
  
  // lat: 37.786882, lng:-122.399972
  const loadLocation = () => {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };

    navigator.geolocation.getCurrentPosition(geoSuccess,
      geoFailure,
      geoOptions);
  }


  const geoSuccess = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    setWhere({ lat: position.coords.latitude, lng: position.coords.longitude })
    setIsLoading(false)
  }

  const geoFailure = (err) => {
    setError(err.message);
  }

  // YELP API KEY: 
  let APIKEY = "NeAwJta2vc5B5PU43zvxJAyy_qrNyo1A_rF4YLcB0jWbdxzHiQVtxrlZgJZ2NVB5trVu4Jz2D68lBUajmCu8PL3q4UEhc2rwOXUXPpMe9QfUPNeupJ5HcFY7iDHlXXYx"
  const loadData = async () => {
    fetch(`https://api.yelp.com/v3/businesses/search?sort_by=distance&latitude=${where.lat}&longitude=${where.lng}`,
      {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + APIKEY,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Added setTimeout here only to simulate a slow loading API.
        // This will let us see the spinner.
        setBusinessList(data.businesses)
        setIsLoading(false)
        // setTimeout(() => {}, 0)
      })
      .catch(err => console.log(err))
  }

  const loadFonts = () => {
    Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
  }

  useEffect(() => {
    loadLocation()
    loadFonts()
  }, [])
  // The empty array as a second argument above tells React to only call
  // useEffect on the first render -- just like componentDidMount in class components. 
  // See docs https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  if (isLoading) return <Spinner color='hsl(220, 60%, 90%)' />

  return (
    <Container>
      <Content>
        <Button  style={{marginTop: 24, marginBottom: 24, backgroundColor: "blue", alignSelf: 'center', alignItems: 'center'}} onPress={() => {
          
          setIsLoading(true)
          loadData()
        }}>
          <Text>Click here to find nearby restaurants</Text>
        </Button>
        <FlatList
          data={businessList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <BusinessListItem business={item} />}
        />
      </Content>
    </Container>
  )
}
