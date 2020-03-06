import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    BackHandler,
    ScrollView,
    Modal,
    ToastAndroid,
    TextInput,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';

import DatePicker from 'react-native-jalaali-date-picker'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'


//components
import NoRequest from '../Components/NoRequest'
import BigButton from '../Components/BigButton';
import MyRequest from '../Components/MyRequest';
import SmallButton from '../Components/SmallButton';


const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.show(
            props.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};



export default class Payab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newRequestBtn: true,
            offser: {},
            modalForPaye: false,
            expiredRequestTimeModal: false,
            cities: ['آمل', 'بابل', 'کیش'],
            cityModal: false,
            hampaTypes: ['سفر', 'دورهمی', 'کمک', 'آموزش'],
            hampaTypeModal: false,
            genders: ['آقا', 'خانم', 'هم نیست'],
            genderModal: false,

            exitBtnCounter: 0,
            visible: false,

            requests: [],
            title: '',
            description: '',
            city: '',
            hampaType: '',
            gender: '',
            expiredRequestTime: '',
            address: ''


        };
    }

    componentDidMount() {
        // for disable back btn
        BackHandler.addEventListener('hardwareBackPress', () => this._handleBackButton());

    }

    //custom back button
    _handleBackButton = async () => {

        // if (this.state.exitBtnCounter === 0 && (Actions.currentScene === 'Payab' || Actions.currentScene === 'SendNumber')) {
        //     await this.setState({
        //         exitBtnCounter: 1,
        //         visible: true
        //     })
        // } else if (this.state.exitBtnCounter > 0 && (Actions.currentScene === 'Payab' || Actions.currentScene === 'SendNumber')) {
        //     this.setState({ visible: false })
        //     BackHandler.exitApp()
        // } else {
        //     Actions.pop()
        // }
        // return true;
    }


    // change route
    _navigate = (path) => {
        // Actions[path]()
    }

    //click humberger menu to open drawer
    _openDrawer = () => {
        this.refs['DRAWER'].openDrawer();
    }

    // run when scroll requests and show hide new request button 
    _onScroll = async (event) => {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.state.offset ? 'down' : 'up';

        if (direction === 'down') {
            await this.setState({ newRequestBtn: false, offset: currentOffset })
        } else {
            await this.setState({ newRequestBtn: true, offset: currentOffset })
        }

    }



    // select city on filter
    _selectCity = (city) => {
        this.setState({
            city: city,
            cityModal: false
        })
        console.log(this.state.city)
    }


    //select hampa
    _selectHampa = (hampaType) => {
        this.setState({
            hampaType: hampaType,
            hampaTypeModal: false
        })
    }


    //select gender
    _selectGender = (gender) => {
        this.setState({
            gender: gender,
            genderModal: false
        })
    }



    // filter btn 
    _request = async () => {
        let { requests } = this.state
        requests.push({
            title: this.state.title,
            description: this.state.description,
            city: this.state.city,
            hampaType: this.state.hampaType,
            gender: this.state.gender,
            expiredRequestTime: this.state.expiredRequestTime,
            address: this.state.address
        })
        await this.setState({ requests, modalForPaye: false })
        console.log(this.state.requests)
    }



    render() {
        // StatusBar.setBackgroundColor(this.state.modalForPaye ? color.color_3 : color.color_3);




        const cities = this.state.cities.map((city, i) => {
            return <TouchableOpacity
                key={i}
                style={styles.modal_select_item}
                activeOpacity={.3}
                onPress={() => this._selectCity(city)}>
                <Text style={styles.select_item_text} >{city}</Text>
            </TouchableOpacity>
        })

        const hampaTypes = this.state.hampaTypes.map((hampaType, i) => {
            return <TouchableOpacity
                key={i}
                style={styles.modal_select_item}
                activeOpacity={.3}
                onPress={() => this._selectHampa(hampaType)}>
                <Text style={styles.select_item_text} >{hampaType}</Text>
            </TouchableOpacity>
        })

        const genders = this.state.genders.map((gender, i) => {
            return <TouchableOpacity
                key={i}
                style={styles.modal_select_item}
                activeOpacity={.3}
                onPress={() => this._selectGender(gender)}>
                <Text style={styles.select_item_text} >{gender}</Text>
            </TouchableOpacity>
        })


        let requests = this.state.requests.map((values, i) => {
            return <MyRequest
                id={i}
                key={i}
                city={values.city}
                title={values.title}
                description={values.description}
                expiredRequestTime={values.expiredRequestTime}
                hampaType={values.hampaType}
                gender={values.gender}
            // address={values.address}
            />

        })


        return (

            <View style={styles.Payab} >
                <Toast style={{ fontFamily: 'ISFBold' }} visible={this.state.visible} message="برای خروج دوباره فشار دهید" />

                <View style={{ backgroundColor: "#fff", paddingHorizontal: 5 }} >
                    <View style={{
                        height: 45,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'transparent',
                        borderRadius: 15, marginTop: 5
                    }} >
                        <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }} onPress={() => this.props.navigation.push('Archives')} >
                            <View style={{
                                width: 40, height: 40,  justifyContent: 'center',
                                alignItems: 'center', borderRadius: 10
                            }} >

                                <Image style={{ width: 30, height: 30 }} source={require('./../../assets/icons/box.png')} />
                            </View>
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'row', width: 120, height: 50, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontFamily: 'KM', fontSize: fontsize.fontsize22, top: 0, color: color.color_3 }} >PAYAB</Text>
                            <Image style={{ width: 18, height: 8, position: 'absolute', top: 7 }} source={require('../../assets/images/pa.png')} />
                        </View>


                        <TouchableOpacity style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center', transform: [{ rotate: '0deg' }]
                        }} onPress={() => this.props.navigation.push('Profile')} >
                            <View style={{
                                width: 40, height: 40, backgroundColor: color.color_3, justifyContent: 'center',
                                alignItems: 'center', borderRadius: 10, overflow: 'hidden'
                            }} >
                                <Image style={{ width: '100%', height: '100%' }} source={require('./../../assets/images/jason.webp')} />
                                {/* <FontAwesome5 name='user' size={20} color={color.white} /> */}

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.BODY} >
                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
                        {
                            this.state.requests.length > 0 ?
                                requests : <NoRequest press={() => this.setState({ modalForPaye: true })} />
                        }
                    </ScrollView>




                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalForPaye}
                    onRequestClose={() => {
                        this.setState({ modalForPaye: false })
                    }}>
                    <KeyboardAvoidingView style={{
                        // flex:1
                        height: Dimensions.get('window').height  ,
                        width: Dimensions.get('screen').width,
                    }} behavior="padding">

                        <ScrollView contentContainerStyle={{
                            height: Dimensions.get('window').height,
                            position: 'relative',
                            backgroundColor: color.color_3,
                            alignItems: 'center'
                        }} >



                            <View style={{
                                flexDirection: 'column',
                                width: Dimensions.get('window').width - 20,
                                height: Dimensions.get('window').height,
                                position: 'relative',
                                backgroundColor: color.white,
                                borderTopRightRadius: 40,
                                borderTopLeftRadius: 40,
                                marginTop: 25,
                                // overflow:'hidden'
                            }} >
                                {/* Close modal - title  */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 10
                                    }}>
                                    {/* <View style={styles.title_child}> */}

                                    {/* </View> */}
                                    <Text style={{
                                        fontFamily: 'ISMedium',
                                        fontSize: fontsize.fontsize16,
                                        color: color.color_3,
                                        width: '100%',
                                        textAlign: 'center'
                                    }}>
                                        درخواست پایه
                                </Text>

                                    {/* Close modal  */}
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ modalForPaye: false });
                                            // StatusBar.setBackgroundColor(color.color_1);
                                        }}
                                        activeOpacity={.9}
                                        style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: -20,
                                            right: -5,
                                            width: 50,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 40,
                                            backgroundColor: color.color_3,
                                            borderWidth:2,
                                            borderColor:color.white
                                        }}>
                                        <SimpleLineIcons name='close' size={fontsize.fontsize24} color={color.white} />
                                    </TouchableOpacity>
                                </View>



                                {/* Modal Body */}
                                <View style={{ flexDirection: "column", width: '100%', alignItems: 'center' }}>
                                    <View style={styles.input_box}>
                                        <TextInput
                                            style={styles.form_inputs}
                                            onChangeText={(title) => this.setState({ title })}
                                            placeholder="عنوان"
                                            placeholderTextColor="#999"
                                        />
                                        <SimpleLineIcons name='exclamation' size={fontsize.fontsize16} color={color.color_3} />
                                    </View>


                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 5,
                                        width: Dimensions.get('window').width - 60,
                                        marginBottom: 10
                                    }} >



                                        {/* select gender  */}
                                        <TouchableOpacity style={[styles.min_box, { backgroundColor: color.lightgrey }]} onPress={() => this.setState({ genderModal: true })}>
                                            <Text style={[styles.select_city, { color: this.state.gender ? '#333' : '#999' }]}>
                                                {this.state.gender ? this.state.gender : 'جنسیت'}
                                            </Text>
                                            <SimpleLineIcons name='symbol-male' size={fontsize.fontsize16} color={color.color_3} />
                                        </TouchableOpacity>

                                        <Modal
                                            animationType="fade"
                                            transparent={true}
                                            visible={this.state.genderModal}
                                            onRequestClose={() => {
                                                this.setState({ genderModal: false })
                                            }}>
                                            <TouchableOpacity style={styles.modal_bg} activeOpacity={1} onPress={() => this.setState({ genderModal: false })} >
                                                <View style={styles.white_box}>
                                                    <ScrollView
                                                        contentContainerStyle={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}
                                                        style={{ width: '100%' }}>
                                                        {genders}
                                                    </ScrollView>
                                                </View>
                                            </TouchableOpacity>
                                        </Modal>






                                        {/* select hampa  */}
                                        <TouchableOpacity style={styles.min_box} onPress={() => this.setState({ hampaTypeModal: true })}>
                                            <Text style={[styles.select_city, { color: this.state.hampaType ? '#333' : '#999' }]}>
                                                {this.state.hampaType ? this.state.hampaType : 'نوع هم همپا'}
                                            </Text>
                                            <Image style={{ width: 14, height: 19 }} source={require('../../assets/icons/iconx.png')} />
                                        </TouchableOpacity>

                                        <Modal
                                            animationType="fade"
                                            transparent={true}
                                            visible={this.state.hampaTypeModal}
                                            onRequestClose={() => {
                                                this.setState({ hampaTypeModal: false })
                                            }}>
                                            <TouchableOpacity style={styles.modal_bg} activeOpacity={1} onPress={() => this.setState({ hampaTypeModal: false })} >
                                                <View style={styles.white_box}>
                                                    <ScrollView
                                                        contentContainerStyle={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}
                                                        style={{ width: '100%' }}>
                                                        {hampaTypes}
                                                    </ScrollView>
                                                </View>
                                            </TouchableOpacity>
                                        </Modal>
                                    </View>




                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        width: Dimensions.get('window').width - 60,
                                    }}>

                                        {/* select city     */}
                                        <View style={{
                                            backgroundColor: color.lightgrey,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingRight: 20,
                                            borderRadius: 15,
                                            height: 40,
                                            width: '49%',
                                            elevation: 1,
                                            overflow: 'hidden',
                                        }} >
                                            <TextInput
                                                style={styles.form_inputs}
                                                onChangeText={(city) => this.setState({ city })}
                                                placeholder="موقعیت مکانی"
                                                placeholderTextColor="#999"
                                            />
                                            <SimpleLineIcons name='direction' size={fontsize.fontsize16} color={color.color_3} />
                                        </View>


                                        {/* select date  */}
                                        <TouchableOpacity style={styles.expired_time} onPress={() => this.setState({ expiredRequestTimeModal: true })}>
                                            <Text style={[styles.select_city, { alignItems: 'center', marginTop: 0, color: this.state.expiredRequestTime ? '#333' : '#999' }]}>
                                                {this.state.expiredRequestTime ? this.state.expiredRequestTime : 'پایان تاریخ درخواست'}
                                            </Text>
                                            <SimpleLineIcons name='hourglass' size={fontsize.fontsize16} color={color.color_3} />
                                        </TouchableOpacity>

                                        <Modal
                                            animationType="fade"
                                            transparent={true}
                                            visible={this.state.expiredRequestTimeModal}
                                            onRequestClose={() => {
                                                this.setState({ expiredRequestTimeModal: false })
                                            }}>
                                            <TouchableOpacity style={styles.modal_bg} activeOpacity={1} onPress={() => this.setState({ expiredRequestTimeModal: false })} >
                                                <View style={styles.datepicker_box}>
                                                    <DatePicker
                                                        showTitleDate={false}
                                                        onChangeDate={(date) => {
                                                            this.setState({ expiredRequestTime: date.format('jYYYY/jM/jD') })
                                                        }}
                                                        dateStyle={{ fontFamily: "ISFMedium", color: '#0C394C', fontSize: 16 }}
                                                        btnStyle={{ backgroundColor: 'transparent' }}
                                                        arrowTintColor="#0C394C"
                                                        arrowSize={30}
                                                        dateBoxStyle={{ borderRadius: 15, backgroundColor: 'transparent', borderWidth: 2, borderColor: '#0C394C' }}
                                                        btnUnderlayColor="transparent"
                                                    />
                                                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
                                                        activeOpacity={.7}
                                                        onPress={() => this.setState({ expiredRequestTimeModal: false })} >
                                                        <Text style={styles.datepicker_btn}
                                                            onPress={() => this.setState({ expiredRequestTimeModal: false })}
                                                        >تایید</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </TouchableOpacity>
                                        </Modal>
                                    </View>




                                    <View style={styles.text_area}>
                                        <TextInput
                                            style={styles.text_area_i}
                                            onChangeText={(description) => this.setState({ description })}
                                            placeholder="توضیحات"
                                            placeholderTextColor="#999"
                                            multiline
                                        />
                                        <SimpleLineIcons style={{ marginTop: 10 }} name='note' size={fontsize.fontsize16} color={color.color_3} />
                                    </View>





                                </View>

                                <View style={{
                                    width: "100%",
                                    height: 40,
                                    position: 'absolute',
                                    bottom: (Dimensions.get('screen').height - Dimensions.get('window').height) + 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} >
                                    <SmallButton
                                        title="پافتن همپا"
                                        width="90%"
                                        borderRadius={10}
                                        fontSize={fontsize.fontsize14}
                                        paddingVertical={12}
                                        press={() => this._request()}
                                        bgColor={color.color_3}
                                        color={color.white}
                                        icon={false}
                                    />
                                </View>
                                <View>


                                </View>
                            </View>

                        </ScrollView>
                    </KeyboardAvoidingView>

                </Modal>




                {/* float buton for new req */}

                {
                    this.state.newRequestBtn ?
                        <TouchableOpacity activeOpacity={.6}
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                right: 20,
                                zIndex: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                elevation: 5,
                                backgroundColor: color.font,
                                width: 60,
                             
                            }}
                            onPress={() => {
                                this.setState({ modalForPaye: true })
                                // StatusBar.setBackgroundColor(color.color_3);
                            }}>
                                <FontAwesome5 name='plus' size={fontsize.fontsize16} color={color.color_3} />
                        </TouchableOpacity> : null
                }
            </View>







        );
    }
}

const styles = ({


    Payab: {
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        flex: 1,

    },

    icon_parent: {
        width: 100,
        height: 100,
        backgroundColor: '#696464',
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation: 10
    },



    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 20,

    },
    drawer_button: {
        // paddingVertical: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    drawer_text: {
        fontSize: fontsize.fontsize12,
        color: color.color_4,
        fontFamily: 'ISFBold',
        // marginRight: 10,
        width: 100,
        // backgroundColor:color.color_1,
        textAlign: 'center',
        paddingVertical: 5,
        marginVertical: 2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: color.color_4
    },
    person_name: {
        fontSize: fontsize.fontsize14,
        fontFamily: 'ISFBold',
        marginTop: 10,
        color: '#fff'
    },
    header: {
        height: 60,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sub_header: {
        height: 50,
        width: Dimensions.get('window').width - 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color.color_3,
        borderRadius: 15,
    },
    icon_header: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },


    BODY: {
        height: '100%',
        alignItems: 'center',

    },
    scroll_request: {
        width: Dimensions.get('window').width - 20,
        paddingTop: 8,
        paddingBottom: 300,
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightgrey,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        height: 40,
        width: Dimensions.get('window').width - 60,
        elevation: 1,
        overflow: 'hidden'
    },

    form_inputs: {
        height: 40,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISFBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        color: '#333'
    },
    text_area: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        minHeight: 100,
        width: Dimensions.get('window').width - 60,
        elevation: 1,
        overflow: 'hidden',
        backgroundColor: color.lightgrey
    },
    min_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 15,
        height: 40,
        width: '49%',
        elevation: 1,
        overflow: 'hidden',
        backgroundColor: color.lightgrey
    },
    modal_bg: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    white_box: {
        width: '90%',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    expired_time: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        borderRadius: 15,
        height: 40,
        width: '49%',
        elevation: 1,
        overflow: 'hidden',
        backgroundColor: color.lightgrey
    },
    datepicker_box: {
        width: '90%',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        overflow: 'hidden',
    },
    datepicker_btn: {
        width: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISFBold',
        backgroundColor: '#0C394C',
        borderRadius: 10,
        textAlign: "center",
        color: '#fff'
    },
    text_area_i: {
        width: '90%',
        marginBottom: 10,
        minHeight: 100,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISFBold',
        paddingHorizontal: 10,
        textAlign: 'right',
        textAlignVertical: 'top'
    },
    select_city: {
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISFBold',
        textAlign: 'right',
        paddingRight: 10,
        width: '90%',
        backgroundColor: color.lightgrey,
    },
    modal_select_item: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        width: '100%',
        backgroundColor: '#fff',
        padding: 5
    },
    select_item_text: {
        fontFamily: 'ISFBold',
        paddingVertical: 10,
        fontSize: fontsize.fontsize14,
        textAlign: 'center',
        color: '#333',
        width: '100%',
    }





})

