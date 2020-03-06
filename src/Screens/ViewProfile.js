import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Modal,
    Image,
    StatusBar
} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import * as color from '../Colors'
import * as fontsize from '../FonSizes'


//components 
import SmallButton from '../Components/SmallButton';





export default class ViewProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            following : false,
            blockUser:false
        }
    }

    componentDidMount() {
        // const {detail} = this.props.navigation.state
        console.log(this.props.navigation.state.params)
    }









    render() {
        const { params } = this.props.navigation.state 
        console.log(params)


        return (
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} >

                <View style={styles.ViewProfile}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        width: Dimensions.get('window').width - 40,
                    }} >


                        <View style={{ flexDirection: 'column', marginRight: 10 }} >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                borderRadius: 15,
                                marginBottom: 5,
                                height: 30,
                                width: Dimensions.get('window').width - 200,
                                overflow: 'hidden',
                            }}>
                                <Text style={[styles.form_inputs, { fontSize: fontsize.fontsize30, paddingRight: 0 }]}>{params != undefined ? params.name : 'شهاب حسینی'}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                borderRadius: 15,
                                // height: 30,
                                width: Dimensions.get('window').width - 200,
                                overflow: 'hidden',
                            }}>
                                <Text style={styles.form_inputs}>{params != undefined ? params.address : 'تهران'}</Text>
                                <SimpleLineIcons name='location-pin' size={14} color={color.color_3} />
                            </View>
                        </View>
                        <View style={styles.icon_parent} >
                            <View style={styles.icon_cover} >
                                <Image style={{ width: "100%", height: "100%" }} source={params? params.image : require('./../../assets/images/shahab.jpeg')} />
                            </View>
                        </View>
                    </View>

                    <Text style={{
                        width: Dimensions.get('window').width - 40,
                        height: 1,
                        marginVertical: 10,
                        backgroundColor: color.color_3,
                        marginTop: 20
                    }} ></Text>


                    <View style={styles.account_form}>

                        <View style={styles.input_box}>
                            <Text style={styles.form_inputss}>{params != undefined ? params.email : 'shahabhosseini@gmail.com'}</Text>
                            <Text style={styles.form_inputs}>ایمیل :</Text>
                            <SimpleLineIcons name='envelope' size={14} color={color.color_3} />
                        </View>

                        <View style={styles.input_box}>
                            <Text style={styles.form_inputss}>{params != undefined ? params.mobile : '09128976543'}</Text>
                            <Text style={styles.form_inputs}>شماره همراه : </Text>
                            <SimpleLineIcons name='screen-smartphone' size={14} color={color.color_3} />
                        </View>
                        <View style={styles.input_box}>
                            <Text style={styles.form_inputss}>{params != undefined ? params.birthday : '1360/09/08'}</Text>
                            <Text style={styles.form_inputs}>تاریخ تولد : </Text>
                            <SimpleLineIcons name='calendar' size={14} color={color.color_3} />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            marginBottom: 5,
                            paddingHorizontal: 10,
                            borderRadius: 15,
                            width: Dimensions.get('window').width - 40,
                            overflow: 'hidden',
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize20,
                                fontFamily: 'ISFMedium',
                                textAlign: 'right',
                                paddingRight: 10,
                                color: color.font
                            }}>درباره من :
                            <Text style={{ paddingLeft: 5,color:color.font2, fontSize: fontsize.fontsize18, }} >
                                    {params != undefined ? params.aboutme : ' دانشجوی سال سوم بازیگری '}
                                </Text>
                            </Text>
                            <SimpleLineIcons style={{}} name='book-open' size={14} color={color.color_3} />
                        </View>



                    </View>
                    <View style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10
                    }} >


                        
                        <SmallButton
                            title={this.state.blockUser ? "مسدود شده" : "مسدود کردن"}
                            width="30%"
                            borderRadius={10}
                            marginBottom={20}
                            fontSize={fontsize.fontsize18}
                            paddingVertical={12}
                            press={() => this.setState((prev)=>{return{blockUser:!prev.blockUser , following :false}})}
                            icon={true}
                            color={this.state.blockUser ? color.white : color.decline}
                            bgColor={this.state.blockUser ? color.decline : color.white}
                            iconColor={this.state.blockUser ? "transparent" : color.decline }
                            iconName={this.state.blockUser ? "" :"ban"}
                        />
                        <SmallButton
                            title={this.state.following ? "دنبال شده" : "دنبال کردن"}
                            width="30%"
                            borderRadius={10}
                            marginBottom={20}
                            fontSize={fontsize.fontsize18}
                            paddingVertical={12}
                            press={() => this.setState((prev)=>{return{following:!prev.following}})}
                            bgColor={this.state.following ? color.accept :color.white }
                            color={this.state.following ? color.white : color.accept}
                            icon={true}
                            iconColor={this.state.following ? "transparent" : color.accept}
                            iconName={this.state.following ? "" :"plus" }

                        />
                        <SmallButton
                            title="فرستادن پیام"
                            width="30%"
                            borderRadius={10}
                            marginBottom={20}
                            fontSize={fontsize.fontsize18}
                            paddingVertical={12}
                            press={() => this.props.navigation.push('Chat')}
                            bgColor={color.color_3}
                            color={color.white}
                            icon={true}
                            iconColor={color.white}
                            iconName="bubble"
                        />
                    </View>







                </View>
            </View>



        );
    }
}

const styles = ({


    ViewProfile: {
        width: Dimensions.get('window').width,
        backgroundColor: color.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: Dimensions.get('window').height - StatusBar.currentHeight - 100,
        paddingTop: 20,
    },

    icon_parent: {
        width: 80,
        height: 80,
        borderColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:30
    },

    icon_cover: {
        width: 80,
        height: 80,
        backgroundColor: color.color_1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },



    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        height: 30,
        width: Dimensions.get('window').width - 40,
        overflow: 'hidden',
        // borderBottomColor: color.color_3,
        // borderBottomWidth: 1,
    },

    form_inputs: {
        fontSize: fontsize.fontsize20,
        fontFamily: 'ISFBold',
        textAlign: 'right',
        paddingRight: 10,
        color: color.font

    },
    form_inputss: {
        fontSize: fontsize.fontsize18,
        fontFamily: 'ISFMedium',
        textAlign: 'right',
        paddingRight: 10,
        color: color.font2

    },






})