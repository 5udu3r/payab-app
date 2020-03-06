import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const Notification = (props) => (
    <TouchableOpacity
        style={styles.Notification}
        onPress={props.press}
        activeOpacity={.7}>
        <View styel={{ flexDirection: 'column' }} >
            <Text style={styles.NotificationTitle}>{props.title}</Text>
            <Text style={styles.NotificationText}>{props.description}</Text>
        </View>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderWidth:1,
            borderColor: props.iconColor,
            marginLeft:10,
            borderRadius:40
        }} >

        <SimpleLineIcons  name={props.iconName} size={14} color={props.iconColor} />
        </View>
    </TouchableOpacity >
)



const styles = ({
    Notification: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: Dimensions.get('window').width - 20,
        height: 50,
        // backgroundColor:color.color_3,
        padding: 20,
        borderRadius: 25,
        marginBottom: 10
    },

    NotificationTitle: {
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISBold',
        color: color.font,
        marginBottom: 5,
    },
    NotificationText: {
        fontSize: fontsize.fontsize8,
        fontFamily: 'ISBold',
        color: color.font
    },

})


export default Notification

