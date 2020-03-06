import React, { Component } from 'react';

import {
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import SmallButton from '../Components/SmallButton';




export default class RequestDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            acceptHampaRequest:false
        }
    }



    render() {

        return (
            <View style={styles.RequestDetail}>

                <View style={{
                    width: "100%",
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: color.color_3,
                        height: 100,
                        zIndex: 2,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        elevation:2
                    }}>

                        <FontAwesome5 style={{ marginLeft: 5 }} name='compass' size={fontsize.fontsize60} color={color.white} />
                        <View style={{
                            flexDirection: 'row',
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10,
                            backgroundColor: color.white,
                            borderRadius: 30,
                            bottom: -20,
                            zIndex: 10,
                            elevation: 3,
                            position:'absolute'

                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize16,
                                fontFamily: 'IYB',
                                color: color.font,
                                marginRight: 3
                            }} >کسی میاد بریم رشت</Text>
                        </View>
                    </View>



                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        backgroundColor:color.bg2,
                        paddingBottom: 40,
                        paddingTop: 80,
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                        alignItems: 'center',
                        zIndex: -1,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        marginTop: -60,
                        elevation:2
                    }}>
                        <View style={{
                            width: '100%',
                            height: 50,
                            flexDirection: 'row',
                            marginTop: 4,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: fontsize.fontsize10,
                                    fontFamily: 'ISFBold',
                                    color: color.font,
                                    marginRight: 3
                                }} >1398/09/09</Text>
                                <SimpleLineIcons style={{ marginLeft: 5 }} name='hourglass' size={14} color={color.color_3} />
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: fontsize.fontsize10,
                                    fontFamily: 'ISFBold',
                                    color: color.font,
                                    marginRight: 3
                                }} >دختر و پسر</Text>
                                <FontAwesome5 style={{ marginLeft: 5 }} name='venus-mars' size={14} color={color.color_3} />
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: fontsize.fontsize10,
                                    fontFamily: 'ISFBold',
                                    color: color.font,
                                    marginRight: 3
                                }} >رشت</Text>
                                <SimpleLineIcons style={{ marginLeft: 5 }} name='location-pin' size={14} color={color.color_3} />
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: fontsize.fontsize10,
                                    fontFamily: 'ISFBold',
                                    color: color.font,
                                    marginRight: 3
                                }} >سفر</Text>
                                <Image style={{ width: 12, height: 18 }} source={require('../../assets/icons/iconx.png')} />
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            // backgroundColor: '#e1e1e1'
                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize14,
                                fontFamily: 'ISFMedium',
                                color: color.font,
                                marginRight: 3
                            }} >میخواستم برای ۲ روز برم رشت . و اگر شرایط مساعد بود بیتشر میمونیم . کسی آشنا به محیط و عاشق طبیعت بیاد بریم . ماشین خودم دارم . دارم ۳ نفر قبول کنن میریم </Text>
                        </View>


                    </View>
                    <View style={{
                        width: '100%',
                        backgroundColor: color.bg1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // height: 80,
                        paddingTop: 80,
                        paddingBottom:20,
                        paddingHorizontal: 10,
                        flexDirection: 'column',
                        marginTop: -60,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        // elevation:2,
                        zIndex:-2

                    }} >
                        <SmallButton
                            title={this.state.acceptHampaRequest ? "رد درخواست" : "قبول درخواست"}
                            width="100%"
                            borderRadius={10}
                            bgColor={this.state.acceptHampaRequest ? color.decline :color.accept}
                            marginBottom={5}
                            fontSize={fontsize.fontsize14}
                            color={color.white}
                            paddingVertical={12}
                            press={() => this.setState((prev)=>{return{acceptHampaRequest : !prev.acceptHampaRequest}})}
                            icon={true}
                            iconColor={color.white}
                            iconName={this.state.acceptHampaRequest ? "" : "check"}
                            iconSize={14}
                        />
                        <SmallButton
                            title="نمایش پروفایل"
                            width="100%"
                            borderRadius={10}
                            bgColor="transparent"
                            marginBottom={0}
                            fontSize={fontsize.fontsize14}
                            color={color.white}
                            paddingVertical={12}
                            press={() => this.props.navigation.push('ViewProfile')}
                            icon={true}
                            iconColor={color.white}
                            iconName="user"
                            iconSize={14}
                        />
                    </View>



                </View>

            </View>






        );
    }
}

const styles = ({

    RequestDetail: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: color.white,


    },


})

