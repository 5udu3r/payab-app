import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    StatusBar,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import * as color from '../Colors';
import * as fontsize from '../FonSizes'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//components
import BigButton from '../Components/BigButton'


class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: '9364918606'
        }
    }

    componentDidMount() {

    }




    // mobile number onchange
    _changeNumber = (e) => {
        // just number has permission
        this.setState({
            number: e.replace(/[^0-9]/g, '').trim()
        })
    }




    // send code function
    _enterCode = async () => {


        if (this.state.number.length === 10) {
            this.setState({ isLoading: true })
            // merge code and user number 
            let sentNumber = this.state.code + this.state.number
            await this.setState({
                sentNumber: sentNumber.trim()
            })
            // this.props.onRegister(sentNumber);


            const data = new FormData();
            data.append('phone', this.state.sentNumber)

            const res = await PostToApi(data, 'auth/otp/sms');


            if (res.status === 200) {
                this.setState({ isLoading: false })
                console.log(res)

                // go to enter code page 
                // Actions.GetCode({
                //     phone: res.data.phone,
                //     code: res.data.code
                // });

            } else {
                this.setState({ isLoading: false })

                // error message show
                // animation show permission 
                await this.setState({
                    wrongNumber: true,
                    errorText: res.error
                })

                //text animation 
                Animated.timing(
                    this.state.fadeText,
                    {
                        toValue: 0,
                        duration: 2000,
                        delay: 3000
                    }
                ).start()

                // set text animation opacity value
                // reset wrong number to default
                setTimeout(() => {
                    this.setState({
                        wrongNumber: false,
                        fadeText: new Animated.Value(1),
                    })
                }, 5000)
            }

        } else {

            // animation show permission 
            await this.setState({
                wrongNumber: true,
                errorText: ' شماره همراه باید ۱۰ کارکتر باشد'
            })

            //text animation 
            Animated.timing(
                this.state.fadeText,
                {
                    toValue: 0,
                    duration: 2000,
                    delay: 3000
                }
            ).start()

            // set text animation opacity value
            // reset wrong number to default
            setTimeout(() => {
                this.setState({
                    wrongNumber: false,
                    fadeText: new Animated.Value(1),
                })
            }, 5000)
        }
    }




    render() {

        let { fadeText } = this.state

        return (

            <View style={styles.Register}>


                <KeyboardAvoidingView style={{
                    width: Dimensions.get('window').width,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: "100%",
                }} behavior="padding">
                    <ImageBackground style={{
                        flex: 1,
                        height:"100%",
                        width: Dimensions.get('window').width,
                        // justifyContent: 'center',
                        // alignItems: 'center',
                    }}
                        imageStyle={{ resizeMode: 'repeat' }}
                        source={require('./../../assets/icons/xxx.png')}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                            colors={["#46b7fd30", "#46b7fd30"]}
                            style={{
                                width: Dimensions.get('window').width,
                                height: "100%",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>




                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20,
                            }} >

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 200,
                                    height: 100,
                                    zIndex: 10,
                                }}>
                                    <View style={styles.logo_box} >
                                        <Text style={{ fontFamily: 'KM', fontSize: fontsize.fontsize32, color: color.color_3 }} >PAYAB</Text>
                                        <Image style={{ width: 28, height: 12, position: 'absolute', top: 2 }} source={require('../../assets/images/pa.png')} />
                                    </View>
                                </View>
                                <View style={styles.number_inputs}>
                                    <Text style={styles.number_inputs_title} >
                                        شماره همراه خود را وارد نمایید
                                </Text>


                                    <View style={styles.input_box} >
                                        <View style={{
                                            flexDirection: 'row',
                                            width: '30%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} >
                                            <Image source={require('../../assets/images/iran.png')} />
                                            <Text style={styles.input_box_1}>+98</Text>

                                        </View>

                                        <TextInput
                                            style={styles.input_box_2}
                                            onChangeText={(e) => this._changeNumber(e)}
                                            keyboardType='numeric'
                                            maxLength={10}
                                            selectionColor={color.color_2}
                                        />

                                    </View>


                                </View>

                                {
                                    this.state.wrongNumber ?
                                        <Animated.Text style={{
                                            height: 20,
                                            width: Dimensions.get('window').width - 100,
                                            fontSize: fontsize.fontsize32,
                                            fontFamily: 'ISBold',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'red',
                                            paddingHorizontal: 20,
                                            marginTop: 5,
                                            opacity: fadeText
                                        }} >
                                            {this.state.errorText}
                                        </Animated.Text> :
                                        <Text style={{ height: 20, paddingHorizontal: 20, marginTop: 5, }}></Text>

                                }



                                <BigButton
                                    width={80}
                                    height={80}
                                    bgColor={color.color_3}
                                    borderColor="#46b7fd88"
                                    borderWidth={10}
                                    activeOpacity={.6}
                                    borderRadius={100}
                                    textColor="#fff"
                                    size={fontsize.fontsize32}
                                    title=""
                                    top={0}
                                    bottom={0}
                                    press={() => this.props.navigation.navigate('Confirm')}
                                    isLoading={this.state.isLoading}
                                    icon={true}
                                    iconName="arrow-right"
                                    iconColor={color.lightgrey}

                                />
                            </View>
                        </LinearGradient>
                    </ImageBackground>


                </KeyboardAvoidingView>



            </View>



        );
    }
}

const styles = ({


    Register: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        width: Dimensions.get('window').width
    },


    logo_box: {
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: 70,
        height: 70,
    },

    input_box: {
        flexDirection: 'row',
        width: (Dimensions.get('window').width * 7) / 10,
        minWidth: 250,
        borderRadius: 15,
        backgroundColor: 'transparent',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.color_3,
    },

    input_box_1: {
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: 'ISF',
        marginTop: 5,
        color: color.color_3
    },
    input_box_2: {
        height: 45,
        width: '70%',
        paddingLeft: 10,
        fontSize: fontsize.fontsize18,
        letterSpacing: 5,
        fontFamily: 'ISFBold',
        marginTop: 5,
        color: color.color_3

    },
    number_inputs: {
        width: (Dimensions.get('window').width * 7) / 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    number_inputs_title: {
        color: color.color_3,
        fontSize: fontsize.fontsize12,
        marginBottom: 20,
        fontFamily: 'ISBold',
        width: '100%',
        textAlign: 'center'
    },



})






export default Register;