import React from 'react';
import { Text, View, Dimensions,  StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'



const NoMessage = (props) => (
    <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height - StatusBar.currentHeight,
    }} >
        <FontAwesome5 name='envelope' size={fontsize.fontsize60} color={color.inactive} />
        <Text style={{
            fontSize: fontsize.fontsize12,
            fontFamily: 'IS',
            color: color.inactive
        }} > پیامی برای نمایش وجود ندارد </Text>

    </View>
)




export default NoMessage

