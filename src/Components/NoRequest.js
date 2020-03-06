import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NoRequest = (props) => (
    <TouchableOpacity
        style={styles.noRequest}
        onPress={props.press}
        activeOpacity={.7}>
        <View style={{ justifyContent: 'center', marginLeft: 10, alignItems: 'center', width: 100, height: 100, borderRadius: 15, backgroundColor: color.white }} >
            <Image style={{ width: 50, height: 81 }} source={require('../../assets/images/logo.png')} />
        </View>

        <View styel={{ flexDirection: 'column',alignItems: 'center',justifyContent:'center' ,width:'100%'}} >
            <Text style={styles.noRequestTitle}>چیزی برای نمایش وجود ندارد</Text>
            <Text style={styles.noRequestText}>برای یافتن هم همپا فشار دهید </Text>
        </View>
    </TouchableOpacity >
)



const styles = ({
    noRequest: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        // backgroundColor:color.color_3,
        padding: 20,
    },

    noRequestTitle: {
        fontSize: fontsize.fontsize16,
        fontFamily: 'ISBold',
        color: color.color_3,
        marginBottom: 5,
        textAlign:'center'
    },
    noRequestText: {
        fontSize: fontsize.fontsize14,
        fontFamily: 'ISBold',
        color: color.color_3,
        textAlign:'center'

    },

})


export default NoRequest

