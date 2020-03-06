import React, { Component } from 'react';
import { Text, View, Dimensions, ActivityIndicator, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

export default class SplashScreen extends Component {


    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }


    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('@token');
        this.props.navigation.navigate(userToken ? 'Home' : 'Register');
    };


    render() {
        return (
            <View style={styles.SplashView}>
                <View style={styles.VilaApp} >
                    <Image style={{ width: 50, height: 81, marginBottom: 10 }} source={require('../../assets/images/logo.png')} />
                    <View style={{
                        paddingTop: 8,
                        // borderTopWidth: 3,
                        borderColor: color.color_3,
                    }} >
                        <Text style={{
                            color: color.color_3,
                            fontSize: fontsize.fontsize8,
                            lineHeight: 8,
                            textAlign: 'left',
                            marginBottom:4,
                            fontWeight:'bold',
                            marginLeft:4
                        }} >
                            POWERED BY
                        </Text>
                        <Text style={styles.VilaAppText} >
                            PAYAB
                        </Text>
                    </View>

                    <Text style={styles.VilaAppNumber} >
                        {new Date().getFullYear()}
                    </Text>
                    <ActivityIndicator style={{ marginTop: 20 }} size="small" color={color.color_3} />
                </View>
            </View>
        )
    }
}



const styles = ({
    SplashView: {
        backgroundColor: color.color_1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        width: Dimensions.get('window').width,
    },

    VilaApp: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300
    },
    VilaAppText: {
        color: color.color_3,
        fontFamily: 'KR',
        fontSize: fontsize.fontsize42,
        // backgroundColor:'red',
        lineHeight: 42,
    },
    VilaAppNumber: {
        color: color.color_3,
        fontFamily: 'KB',
        letterSpacing: 36,
        

    }

})
