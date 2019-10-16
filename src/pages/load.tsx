import React from './Home/node_modules/react'
import {ActivityIndicator,View} from './Home/node_modules/react-native'

export default function(){
    return(
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <ActivityIndicator/>
        </View>
    )
}