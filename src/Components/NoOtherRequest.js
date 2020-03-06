import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

const NoOtherRequest = (props) => (
    <TouchableOpacity
        style={styles.noOtherRequest}
        activeOpacity={.7}>
        <View style={{ justifyContent: 'center', marginLeft: 10, alignItems: 'center', width: 100, height: 100, borderRadius: 15, backgroundColor: color.white }} >
            <Image style={{ width: 50, height: 81 }} source={require('../../assets/images/logo.png')} />
        </View>
        <View styel={{ flexDirection: 'column' }} >
            <Text style={styles.noOtherRequestTitle}>درخواست همپایی برای نمایش وجود ندارد</Text>
        </View>
    </TouchableOpacity >
)



const styles = ({
    noOtherRequest: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        // backgroundColor:color.color_3,
        padding: 20,
    },

    noOtherRequestTitle: {
        fontSize: fontsize.fontsize16,
        fontFamily: 'ISBold',
        color: color.color_6,
        marginBottom: 5,
        textAlign:'center'
    }

})


export default NoOtherRequest

