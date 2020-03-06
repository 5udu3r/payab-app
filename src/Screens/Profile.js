import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    NativeModules,
    TouchableOpacity,
    ImageBackground,
    Modal,
    Image,
    StatusBar
} from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import DatePicker from 'react-native-jalaali-date-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



//components 
import SmallButton from '../Components/SmallButton';

import * as color from '../Colors'
import * as fontsize from '../FonSizes'





export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateModal: false
        }
    }









    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="padding">

                <View style={styles.Profile}>
                    <View style={styles.icon_parent} >
                        <View style={styles.icon_cover} >

                            <TouchableOpacity onPress={this.pickSingleImage} activeOpacity={.8} >
                                <Image style={{ width: 80, height: 80 }} source={require('../../assets/images/jason.webp')} />
                            </TouchableOpacity>


                        </View>
                    </View>


                    <View style={styles.account_form}>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(name) => this.setState({ name })}
                                placeholder="نام و نام خانوادگی"
                                placeholderTextColor={color.placeHolder}
                            />
                            <SimpleLineIcons name='user' size={14} color={color.color_3} />
                        </View>
                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(email) => this.setState({ email })}
                                placeholder="ایمیل"
                                placeholderTextColor={color.placeHolder}
                            />
                            <SimpleLineIcons name='envelope' size={14} color={color.color_3} />
                        </View>

                        {/* <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 5,
                            width: Dimensions.get('window').width - 40,
                        }}>

                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: 40,
                                        fontSize: 12,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        width: '90%',
                                        color: '#333'
                                    }}
                                    onChangeText={(city) => this.setState({ city })}
                                    placeholder="شهر"
                                    placeholderTextColor={color.placeHolder}
                                />
                                <FontAwesome5 name='building' size={14} color={color.color_3} />
                            </View>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <TextInput
                                    style={{
                                        backgroundColor: '#fff',
                                        height: 40,
                                        fontSize: 12,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        width: '90%',
                                        color: '#333'
                                    }}
                                    onChangeText={(province) => this.setState({ province })}
                                    placeholder="استان"
                                    placeholderTextColor={color.placeHolder}
                                />
                                <FontAwesome5 name='city' size={14} color={color.color_3} />
                            </View>
                        </View> */}

                        <View style={styles.input_box}>
                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(address) => this.setState({ address })}
                                placeholder="موقعیت تقریبی .. استان .. شهر ..."
                                placeholderTextColor={color.placeHolder}
                            />
                            <SimpleLineIcons name='location-pin' size={14} color={color.color_3} />
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 5,
                            width: Dimensions.get('window').width - 40,
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                paddingHorizontal: 20,
                                borderRadius: 15,
                                height: 40,
                                width: '49%',
                                elevation: 1,
                                overflow: 'hidden'
                            }} onPress={() => this.setState({ dateModal: true })}>
                                <Text style={[styles.form_birthday, { color: this.state.birthday ? color.font : color.placeHolder }]}>
                                    {this.state.birthday ? this.state.birthday : 'تاریخ تولد'}
                                </Text>
                                <SimpleLineIcons name='event' size={14} color={color.color_3} />
                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: '#fff',
                                height: 40,
                                width: '49%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: 20,
                                borderRadius: 15,
                                elevation: 1,
                                overflow: 'hidden'
                            }} >
                                <Text
                                    style={{
                                        fontSize: fontsize.fontsize12,
                                        fontFamily: 'ISBold',
                                        textAlign: 'right',
                                        paddingRight: 10,
                                        fontFamily:'ISF',
                                        width: '90%',
                                        color: color.inactive
                                    }}
                                >
                                0912 456 8976
                                </Text>
                                <SimpleLineIcons name='screen-smartphone' size={fontsize.fontsize14} color={color.color_3} />
                            </View>
                        </View>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.dateModal}
                            onRequestClose={() => {
                                this.setState({ dateModal: false })
                            }}>
                            <TouchableOpacity style={styles.picker_modal} activeOpacity={1} onPress={() => this.setState({ dateModal: false })} >
                                <View style={styles.picker_box}>
                                    <DatePicker
                                        defDateString="1990/04/21"
                                        showTitleDate={false}
                                        onChangeDate={(date) => {
                                            this.setState({ birthday: date.format('jYYYY/jM/jD') })
                                        }}
                                        dateStyle={{ fontFamily: "ISFMedium", color: '#0C394C', fontSize: fontsize.fontsize16 }}
                                        btnStyle={{ backgroundColor: 'transparent' }}
                                        arrowTintColor="#0C394C"
                                        arrowSize={30}
                                        dateBoxStyle={{ borderRadius: 15, backgroundColor: 'transparent', borderWidth: 2, borderColor: '#0C394C' }}
                                        btnUnderlayColor="transparent"
                                    />
                                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
                                        activeOpacity={.7}
                                        onPress={() => this.setState({ dateModal: false })} >
                                        <Text style={{
                                            width: 100,
                                            paddingVertical: 10,
                                            paddingHorizontal: 20,
                                            fontSize: fontsize.fontsize14,
                                            fontFamily: 'ISFMedium',
                                            backgroundColor: '#0C394C',
                                            borderRadius: 10,
                                            textAlign: "center",
                                            color: '#fff'
                                        }}
                                            onPress={() => this.setState({ dateModal: false })}
                                        >تایید</Text>
                                    </TouchableOpacity>

                                </View>
                            </TouchableOpacity>
                        </Modal>



                        <View style={styles.input_box_text_area}>
                            <TextInput
                                style={styles.form_text_area}
                                onChangeText={(description) => this.setState({ description })}
                                placeholder="درباره من ... علایق .. مهارتها .. "
                                placeholderTextColor={color.placeHolder}
                                multiline
                            />
                            <SimpleLineIcons style={{ marginTop: 10 }} name='book-open' size={14} color={color.color_3} />
                        </View>


                    </View>




                    <View style={{ width:"100%",height:40, position: 'absolute', bottom: 45, justifyContent: 'center', alignItems: 'center' }} >

                        <SmallButton
                            title="ویرایش"
                            width="90%"
                            borderRadius={10}
                            marginBottom={20}
                            fontSize={fontsize.fontsize16}
                            paddingVertical={12}
                            press={() => alert('edit')}
                            bgColor={color.color_3}
                            color={color.white}
                            icon={false}

                        />
                    </View>



                </View>
            </KeyboardAvoidingView>



        );
    }
}

const styles = ({


    Profile: {
        width: Dimensions.get('window').width,
        backgroundColor: color.lightgrey,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        paddingTop: 30,
    },

    icon_parent: {
        width: 80,
        height: 80,
        // borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginBottom: 20
    },

    icon_cover: {
        width: 80,
        height: 80,
        backgroundColor: color.color_3,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        height: 40,
        width: Dimensions.get('window').width - 40,
        elevation: 1,
        overflow: 'hidden'
    },

    form_inputs: {
        backgroundColor: '#fff',
        height: 40,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISF',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'

    },
    input_box_text_area: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        height: 80,
        width: Dimensions.get('window').width - 40,
        elevation: 1,
        overflow: 'hidden'
    },
    form_text_area: {
        width: '90%',
        marginBottom: 10,
        height: 80,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISF',
        paddingHorizontal: 10,
        textAlign: 'right',
        textAlignVertical: 'top',
        fontWeight: '100',
        color:color.placeHolder
    },
    form_birthday: {
        backgroundColor: '#fff',
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISF',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color:color.placeHolder


    },
    picker_modal: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker_box: {
        width: '90%',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        overflow: 'hidden',
    },




})