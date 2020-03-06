

import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import * as fontsize from '../FonSizes'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SmallButton from './SmallButton';



const MyRequest = (props) => (
    <View
        style={styles.MyRequest}
    >
        <View style={{
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow:'hidden',

        }} >

            <View style={{
                width: '80%',
                minHeight: 30,
                backgroundColor: color.color_3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                zIndex: 30,
                elevation: 3,
                marginBottom: -15
            }} >
                <Text style={{
                    fontSize: fontsize.fontsize14,
                    fontFamily: 'IYB',
                    color: color.white,
                }}>{props.title}</Text>
            </View>


            <View style={{
                width: '100%',
                flexDirection: 'column',
                backgroundColor: color.white,
                borderRadius:15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                zIndex: 20,
                justifyContent: 'flex-start',
                overflow: 'hidden',
                minHeight:120,
                borderWidth:2,
                borderColor:color.bg2,
                elevation:1

            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 70,
                    paddingTop:10,
                    paddingHorizontal:10,
                }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: fontsize.fontsize12,
                            fontFamily: 'ISFBold',
                            color: '#333',
                            marginRight: 3
                        }} >{props.expiredRequestTime}</Text>
                        <SimpleLineIcons style={{ marginLeft: 5 }} name='hourglass' size={fontsize.fontsize14} color={color.color_3} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: fontsize.fontsize12,
                            fontFamily: 'ISFBold',
                            color: '#333',
                            marginRight: 3
                        }} >{props.city}</Text>
                        <SimpleLineIcons style={{ marginLeft: 5 }} name='location-pin' size={fontsize.fontsize14} color={color.color_3} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: fontsize.fontsize12,
                            fontFamily: 'ISFBold',
                            color: '#333',
                            marginRight: 3
                        }} >{props.gender}</Text>
                        <SimpleLineIcons style={{ marginLeft: 5 }} name='symbol-male' size={fontsize.fontsize14} color={color.color_3} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: fontsize.fontsize12,
                            fontFamily: 'ISFBold',
                            color: '#333',
                            marginRight: 5
                        }} >{props.hampaType}</Text>
                        <Image style={{ width: 12, height: 18 }} source={require('../../assets/icons/iconx.png')} />
                    </View>
                </View>



                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'flex-end',
                   padding:10

                }}>
                    <Text style={{
                        fontSize: fontsize.fontsize10,
                        fontFamily: 'ISFBold',
                        color: color.font,
                    }} >{props.description}</Text>
                </View>


            </View>




            <View style={{
                flexDirection: 'row',
                width: '100%',
                backgroundColor: color.bg2,
                marginTop: -10,
                paddingTop: 0,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: 10,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                height: 60,
                zIndex: 0,
                borderWidth: 3,
                borderColor: color.white
            }}>

                <SmallButton
                    title="حذف"
                    width="49%"
                    borderRadius={10}
                    bgColor={color.white}
                    marginBottom={0}
                    fontSize={fontsize.fontsize12}
                    color={color.decline}
                    paddingVertical={4}
                    press={() => this.props.navigation.push('ViewProfile')}
                    icon={true}
                    iconColor={color.decline}
                    iconName="close"
                    iconSize={fontsize.fontsize12}
                />
                <SmallButton
                    title="ویرایش"
                    width="49%"
                    borderRadius={10}
                    bgColor={color.white}
                    fontSize={fontsize.fontsize12}
                    color={color.accept}
                    paddingVertical={4}
                    press={() => alert('press')}
                    icon={true}
                    iconColor={color.accept}
                    iconName="note"
                    iconSize={fontsize.fontsize12}
                />
            </View>

        </View>
    </View >
)



const styles = ({
    MyRequest: {
        width: (Dimensions.get('window').width - 20),
        // backgroundColor: color.darkgrey,
        borderRadius: 15,
        marginBottom: 20,
    },

    noRequestTitle: {
        fontSize: 14,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 5,
    },
    noRequestText: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#555'
    },

})


export default MyRequest
