// Navigation/Navigation.js
import GoalView from '../Components/GoalView'
import Home from '../Components/home'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const SearchStackNavigator = createStackNavigator({
  Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Home,
    
  },
  GoalView: {
    screen: GoalView
  }

})

export default createAppContainer(SearchStackNavigator)