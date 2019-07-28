import React from 'react'
import { View, TextInput, Button, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import goal from "../Helpers/Goal"
class Home extends React.Component {
  displayDetailForCategory = (item) =>{
    this.props.navigation.navigate('GoalView', { goal: item})
  }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, }}>
                  <TextInput style={styles.textinput} placeholder='Vous devez donner: 0€'/>
                  <FlatList
                    data={goal}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) =>
                      <TouchableOpacity style={{flex: 1, height:60, backgroundColor: 'red', marginLeft: 10, marginRight: 10, marginTop: 10}} onPress={() => this.displayDetailForCategory(item)}>
                        <Text style={{flex: 1, }}>{item.title}</Text>
                        </TouchableOpacity>
                      }/>
                </View>
                <View style={{flex: 1}}>
                <TouchableOpacity
                    style={styles.share_touchable_floatingactionbutton}>
                    <Image
                        style={styles.share_image}
                        source={require('../Images/add.png')} />
                </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = {
    share_touchable_floatingactionbutton: {
        flex: 1,
        position: 'absolute',
        width: 60,
        height: 60,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center'
      },
    textinput: {
      marginTop: 20,
    }
  }

export default Home