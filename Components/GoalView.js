import React from 'react'
import { View, TextInput, Button, TouchableOpacity, Image, FlatList, Text } from 'react-native'

class GoalView extends React.Component {

    render(){
        const Goal = this.props.navigation.state.params.goal
        return(
            <Text>Bonjour, vous êtes sur {Goal.title}</Text>
        )
    }
}

export default GoalView
