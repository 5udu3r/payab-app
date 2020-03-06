import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    DrawerLayoutAndroid,
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
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-jalaali-date-picker'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import NoOtherRequest from '../Components/NoOtherRequest'
import MyRequest from '../Components/MyRequest';



export default class Archives extends Component {

    constructor(props) {
        super(props)
        this.state = {



        };
        
    }







    render() {

        return (

            <View style={styles.Archives} >


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
                        fontSize: fontsize.fontsize16

                    }} >آرشیو</Text>
                </View>





                <View style={styles.BODY} >
                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
                        <MyRequest
                            key={1}
                            city="آمل"
                            title="فوتسال جام رمضان"
                            description="برای جام رمضان امسال میخوایم تیم بدیم . اگه حرفه ای هستی بیا تو تیممون . نیاز به 5‌نر داریم "
                            expiredRequestTime="1398/09/19"
                            hampaType="تیم فوتبال"
                            gender="پسر" />
                    </ScrollView>

                </View>





            </View>







        );
    }
}

const styles = ({


    Archives: {
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
    scroll_request: {
        width: Dimensions.get('window').width - 20,
        // alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 300,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',


    },





})

