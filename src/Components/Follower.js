import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const Follower = (props) => (
    <TouchableOpacity
        style={styles.Follower}
        onPress={props.press}
        activeOpacity={.7}>
        <TouchableOpacity onPress={props.buttonAction} style={{ borderWidth: 1, borderColor: color.decline, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 20 }} >
            <Text style={{
                fontSize: fontsize.fontsize12,
                fontFamily: 'ISBold',
                color: props.buttonActionColor
            }}>{props.buttonActionTitle}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <View styel={{ flexDirection: 'row' }} >
                <Text style={styles.FollowerTitle}>{props.title}</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                borderColor: props.iconColor,
                marginLeft: 10,
                borderRadius: 10,
                overflow: 'hidden',
                borderWidth: props.image ? 0 : 1,
                borderColor: color.darkgrey
            }} >
                {
                    props.image ?
                        <Image style={{ width: '100%', height: '100%' }} source={props.image} /> :
                        <SimpleLineIcons name="user" size={fontsize.fontsize16} color={color.darkgrey} />
                }

            </View>
        </View>
    </TouchableOpacity >
)



const styles = ({
    Follower: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 20,
        height: 50,
        // backgroundColor:color.color_3,
        padding: 20,
        borderRadius: 15,
        marginBottom: 10
    },

    FollowerTitle: {
        fontSize: fontsize.fontsize14,
        fontFamily: 'ISBold',
        color: color.font,
    },
    FollowerText: {
        fontSize: fontsize.fontsize1810,
        fontFamily: 'ISBold',
        color: color.font
    },
    Followerbtn: {
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISBold',
        color: color.decline
    }

})


export default Follower

