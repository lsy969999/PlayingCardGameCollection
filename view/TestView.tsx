import React from "react"
import { Text, View } from "react-native"
import { Card, Icon } from "@rneui/themed"
const TestView = () => {
    return (<View>
        <Text>TestView</Text>
        <View style={{position: 'absolute'}}>
             <View style={{backgroundColor: 'red', position: 'absolute', left: 0, width:100, height:150}}>
                
            </View>
            <View style={{backgroundColor: 'blue', position: 'absolute', left: 10, width:100, height:150}}>
                
            </View>
            <View style={{backgroundColor: 'white', position: 'absolute', left: 20, width:100, height:150, borderWidth: 1}}>
                <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                    <View style={{position: 'absolute'}}>
                        <Text style={{color: 'red'}}>3</Text><Icon color={'red'} size={10} name="heart" type="font-awesome"/>
                    </View>
                    <View style={{justifyContent: 'space-around', flex: 2}}>
                        <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                        <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                        <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                    </View>
                    <View style={{position: 'absolute', right: 0, bottom: 0, transform: [{rotate: '-180deg'}]}}>
                        <Icon color={'red'} size={10} name="heart" type="font-awesome"/><Text style={{color: 'red'}}>3</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', position: 'absolute', left: 30, width:100, height:150, borderWidth: 1}}>
                <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 2}}>
                    <View style={{position: 'absolute'}}>
                        <Text style={{color: 'red'}}>4</Text><Icon color={'red'} size={10} name="heart" type="font-awesome"/>
                    </View>
                    <View style={{justifyContent: 'space-around', flex: 2, flexDirection: 'row'}}>
                            <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                            <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                        </View>
                        <View style={{justifyContent: 'space-around', flex: 2, flexDirection: 'row'}}>
                            <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                            <Icon color={'red'} size={20} name="heart" type="font-awesome"/>
                        </View>
                    
                    <View style={{position: 'absolute', right: 0, bottom: 0, transform: [{rotate: '-180deg'}]}}>
                        <Icon color={'red'} size={10} name="heart" type="font-awesome"/><Text style={{color: 'red'}}>4</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>)
}

export default TestView