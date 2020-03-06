import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'
import { Call, Email } from 'react-native-openanything';

//components
import NoOtherRequest from '../Components/NoOtherRequest'
import SmallButton from '../Components/SmallButton';



export default class Support extends Component {

    constructor(props) {
        super(props)
        this.state = {



        };
    }

    _call = () => {
        Call('+989111111111')
    }
    _email = () => {
        Email('test@gmail.com')
    }





    render() {

        return (
            <KeyboardAvoidingView style={{
                width: Dimensions.get('window').width,
                flex:1
            }} behavior="height">
                <View style={styles.Support} >



                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 50 }} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <SimpleLineIcons
                                style={{ marginLeft: 10 }}
                                name="arrow-left"
                                size={20}
                                color={color.color_3} />
                        </TouchableOpacity>

                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'ISBold',
                            color: color.color_3,
                            fontSize: fontsize.fontsize25

                        }} >پشتیبانی</Text>
                    </View>




                    <View style={styles.BODY} >
                        {/* call to and email ot  */}
                        <View style={styles.account_form}>
                            <View style={{
                                width: '90%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 10
                            }} >

                                <TouchableOpacity activeOpacity={.9}
                                    style={[styles.call_email_box, { backgroundColor: 'rgba(217, 48, 37, .3)' }]}
                                    onPress={this._email}>
                                    <Text style={[styles.call_email_text, { color: '#d93025' }]} >ایمیل</Text>
                                    <SimpleLineIcons name="envelope" size={18} color="#d93025" />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={.9}
                                    style={[styles.call_email_box, { backgroundColor: 'rgba(0, 200, 81, .3)' }]}
                                    onPress={this._call}>
                                    <Text style={[styles.call_email_text, { color: color.accept }]} >تماس</Text>
                                    <SimpleLineIcons name="phone" size={18} color={color.accept} />
                                </TouchableOpacity>

                            </View>


                            <TextInput
                                style={styles.form_inputs}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="عنوان"
                            />
                            <TextInput
                                style={styles.form_textarea}
                                onChangeText={(countryCode) => this.setState({ countryCode })}
                                placeholder="توضیحات"
                                multiline
                            />

                            
                        </View>

                    </View>
                    <View style={{ width:"100%",height:40, position: 'absolute', bottom: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <SmallButton
                            title="ارسال"
                            width="90%"
                            borderRadius={10}
                            marginBottom={20}
                            fontSize={fontsize.fontsize20}
                            paddingVertical={12}
                            press={() => alert('edit')}
                            bgColor={color.color_3}
                            color={color.white}
                            icon={true}
                            iconName="cursor"
                            iconColor={color.white}
                            iconSize={14}

                        />
                    </View>





                </View>



            </KeyboardAvoidingView>




        );
    }
}

const styles = ({


    Support: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        flex: 1,

    },

  
   


    BODY: {
        height: '100%',
        alignItems: 'center',
        width: '100%'

    },
   

    account_form: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        marginTop: 50
    },
    form_inputs: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        marginBottom: 10,
        height: 40,
        fontSize: fontsize.fontsize15,
        fontFamily: 'ISBold',
        paddingHorizontal: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        textAlign: 'right'
    },
    form_textarea: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        marginBottom: 10,
        minHeight: 100,
        fontSize: fontsize.fontsize15,
        fontFamily: 'ISBold',
        paddingHorizontal: 10,
        shadowColor: "#f7f7f7",
        shadowOpacity: 1,
        elevation: 1,
        textAlign: 'right',
        textAlignVertical: 'top'
    },
   
    call_email_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        borderRadius: 90,
        height: 30
    },
    call_email_text: {
        fontSize: fontsize.fontsize18,
        fontFamily: 'ISBold',
        marginRight: 10
    }






})

