import React, { Component } from 'react';

import {
    Text, View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    StatusBar,
    ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';


import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import BigButton from '../Components/BigButton';




export default class Confirm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: '1234',
            wrongCode: false,
            fadeText: new Animated.Value(1),
            isLoading: false,
            counterIsZero: false,
            time: 10

        }

    }


    // resend number 
    _sendNumber = () => {
        // Actions.pop()
    }


    // validation and go home
    _confirm = async () => {

        // if (this.state.code == this.props.code) {
        // if (this.state.code == 1111) {
        //     this.setState({ isLoading: true })
        //     // go HOME
        //     // Actions.reset('Home');
        //     this._storeData()


        // } else {

        //     // animation show permission 
        //     await this.setState({
        //         wrongCode: true
        //     })

        //     //text animation 
        //     Animated.timing(
        //         this.state.fadeText,
        //         {
        //             toValue: 0,
        //             duration: 2000,
        //             delay: 3000
        //         }
        //     ).start()

        //     // set text animation opacity value
        //     // reset wrong number to default
        //     setTimeout(() => {
        //         this.setState({
        //             wrongCode: false,
        //             fadeText: new Animated.Value(1),
        //         })
        //     }, 5000)
        // }

        this._storeData()
        this.props.navigation.push('Payab')

    }


    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@token', 'true')
        } catch (e) {
            // saving error
        }

    }





    componentDidMount() {
        this._timeCount = setInterval(() => {
            if (this.state.time > 0) {
                this.setState({ time: this.state.time - 1 })
            } else {
                this.setState({ counterIsZero: true })
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timeCount);
    }


    render() {
        let { fadeText } = this.state




        return (
            <View style={styles.Confirm}>




                <KeyboardAvoidingView style={{
                    width: Dimensions.get('window').width,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: '100%'
                }} behavior="padding">

                    <ImageBackground style={{
                        height: "100%",
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
                                flexDirection: 'row',
                                position: 'absolute',
                                top: 0,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                height: 50,
                                width: '100%'
                            }} >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <SimpleLineIcons
                                        style={{ marginLeft: 10 }}
                                        name="arrow-left"
                                        size={fontsize.fontsize20}
                                        color={color.color_3} />
                                </TouchableOpacity>
                            </View>



                            <View style={styles.box_1} >

                                <Text style={styles.my_number}>+{this.props.phone}989364918606</Text>


                                {
                                    this.state.counterIsZero ?

                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: 54,
                                        }} >
                                            <TouchableOpacity
                                                style={styles.resend_box}
                                                activeOpacity={.6}
                                                onPress={() => alert('ارسال کد به همان شماره ')}
                                            >
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    // backgroundColor: color.color_3,
                                                    paddingVertical: 2,
                                                    paddingHorizontal: 5,
                                                    borderRadius: 6,
                                                }} >
                                                    <Text style={styles.resend_text}  > ارسال مجدد کد </Text>
                                                    <FontAwesome5 name='undo-alt' size={fontsize.fontsize14} color={color.color_3} />
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.resend_box}
                                                activeOpacity={.6}
                                                onPress={() => this.props.navigation.goBack()}
                                            >
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    paddingVertical: 2,
                                                    paddingHorizontal: 5,
                                                    borderRadius: 6,

                                                }} >
                                                    <Text style={styles.resend_text}  > تغییر شماره  </Text>
                                                    <FontAwesome5 name='mobile-alt' size={fontsize.fontsize14} color={color.color_3} />

                                                </View>
                                            </TouchableOpacity>
                                        </View> :
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 54,
                                            height: 54,
                                            borderRadius: 100,
                                            borderWidth: 1,
                                            borderColor: color.shadow
                                        }} >
                                            <Text style={styles.show_counter}>00 : {this.state.time > 9 ? this.state.time : '0' + this.state.time}</Text>
                                        </View>




                                }
                            </View>


                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} >


                                <View style={styles.box_2} >

                                    <View style={styles.code_show_box}>
                                        <TextInput
                                            // autoFocus={true}
                                            placeholder="----"
                                            placeholderTextColor={color.color_3}
                                            onChangeText={(e) => this.setState({ code: e.replace(/[^0-9]/g, '').trim() })}
                                            maxLength={4}
                                            style={styles.code_input}
                                            keyboardType='numeric'
                                            selectionColor={color.color_3}
                                        />

                                    </View>

                                    {/* E R R O R   box */}
                                    <View style={{ position: 'absolute', top: 40 }} >
                                        {

                                            this.state.wrongCode ?
                                                <Animated.Text style={{
                                                    height: 20,
                                                    width: Dimensions.get('window').width - 100,
                                                    fontSize: fontsize.fontsize10,
                                                    fontFamily: 'ISBold',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    color: 'red',
                                                    marginTop: 20,
                                                    opacity: fadeText,
                                                    textAlign: 'center'
                                                }} >
                                                    کد وارد شده اشتباه است
                                    </Animated.Text>
                                                :
                                                <Text style={{ height: 20, marginTop: 10, }}></Text>

                                        }

                                    </View>


                                </View>



                                <BigButton
                                    width={80}
                                    height={80}
                                    bgColor={color.color_3}
                                    borderColor={color.shadow}
                                    borderWidth={10}
                                    activeOpacity={.6}
                                    borderRadius={100}
                                    textColor="#fff"
                                    size={fontsize.fontsize16}
                                    title=""
                                    top={20}
                                    bottom={0}
                                    press={() => this._confirm()}
                                    isLoading={this.state.isLoading}
                                    icon={true}
                                    iconName="arrow-right"
                                    iconColor={color.lightgrey}
                                />
                            </View>


                            {/* </View> */}
                        </LinearGradient>
                    </ImageBackground>

                </KeyboardAvoidingView>
            </View>



        );
    }
}

const styles = ({

    Confirm: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: color.white,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        width: Dimensions.get('window').width,
    },

    box_1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').width * 8) / 10,
        borderRadius: 15,
        zIndex: 10,
        marginBottom: 10,
    },

    my_code: {
        fontSize: fontsize.fontsize18,
        fontFamily: 'ISBold',
    },

    resend_box: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-around',
        backgroundColor: color.shadow,
        borderRadius: 30,
        marginVertical: 10,
    },

    my_number: {
        fontSize: fontsize.fontsize14,
        fontWeight: '900',
        color: color.color_3,
        fontFamily: 'ISFBold',
        letterSpacing: 1
    },
    show_counter: {
        fontSize: fontsize.fontsize12,
        fontWeight: '900',
        color: color.shadow,
        fontFamily: 'ISFBold',
        letterSpacing: 1,
    },

    resend_text: {
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISBold',
        color: color.lightgrey,
        borderRadius: 50,
        marginRight: 5,
    },


    box_2: {
        width: (Dimensions.get('window').width * 7) / 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 0,
    },

    activation_code_text: {
        fontFamily: "ISMedium",
        color: '#333',
        fontSize: fontsize.fontsize14,
    },
    code_show_box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: '100%',
    },
    code_input: {
        fontFamily: 'ISFBold',
        fontSize: fontsize.fontsize14,
        textAlign: 'center',
        width: '60%',
        letterSpacing: 18,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: color.color_3,
        color: color.color_3,
        height: 45,
        lineHeight: 40


    }

})

