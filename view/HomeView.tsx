import React from "react"
import { Text, View } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/types";
import { Button } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeView = ({ route, navigation }: Props) => {
    return (<View>
        <Text>HomeView</Text>
        <Button title="Settings" onPress={()=>navigation.navigate('Setting')}></Button>
        <Button title="Test" onPress={()=>navigation.navigate('Test')}></Button>
    </View>)
}

export default HomeView