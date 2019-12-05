import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/Home.js'
import BusinessDetails from './screens/BusinessDetails'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { 
      title: 'The Business List',
    }
  },
  BusinessDetail: BusinessDetails
}, 
   {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'hsl(220, 60%, 90%)'}
  }
})

export default createAppContainer(AppNavigator)
