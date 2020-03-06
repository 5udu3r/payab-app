import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import Follower from '../Components/Follower';



export default class Follownigs extends Component {

    constructor(props) {
        super(props)
        this.state = {

            users: [
                {
                    name: 'هلیا جم',
                    address: 'تهران شهرک غرب',
                    email: 'heliajam@gmail.com',
                    mobile: '09124568976',
                    birthday: '1374/08/19',
                    aboutme: 'دختر شاد و پر انرژی هستم . خیلیم خفم . دانشجوی معماری دانشگاه تهرانم ',
                    image: require('../../assets/images/natalie.jpg')
                },
                {
                    name: 'نوید باقری',
                    address: 'رشت - فومن',
                    email: 'navidbagheri@gmail.com',
                    mobile: '09117896543',
                    birthday: '1370/01/06',
                    aboutme: 'پسر شاد و پر انرژی هستم . خیلیم خفم . دانشجوی حسابداری دانشگاه رشت ',
                    image: require('../../assets/images/ken.jpg')
                },
                {
                    name: 'سیاوش راد',
                    address: 'مازندران - آمل',
                    email: 'siavashrad@gmail.com',
                    mobile: '09118964565',
                    birthday: '1378/08/19',
                    aboutme: 'پسر شاد و پر انرژی هستم . خیلیم خفم . دانشجوی برق دانشگاه شمال ',
                    image: require('../../assets/images/jason.webp')
                },
            ]

        };
    }


    _navigate = (data) => {
        this.props.navigation.push('ViewProfile', data);
    }

    _unFollow = () => {
        alert('unFollow')
    }


    render() {

        return (

            <View style={styles.Follownigs} >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 50 }} >
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

                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'ISBold',
                        color: color.color_3,
                        fontSize: fontsize.fontsize16

                    }} >دنبال شوندگان</Text>
                </View>

                <View style={styles.BODY} >
                    <ScrollView contentContainerStyle={styles.scroll_request} >
                        {
                            this.state.users.map((data, id) => {
                                return <Follower
                                    key={id}
                                    press={() => this._navigate(data)}
                                    buttonAction={() => this._unFollow()}
                                    buttonActionTitle="عدم پیگیری"
                                    buttonActionColor={color.decline}
                                    title={data.name}
                                    image={data.image}
                                />

                            })
                        }


                    </ScrollView>

                </View>





            </View>







        );
    }
}

const styles = ({


    Follownigs: {
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
        paddingBottom: 100,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',


    }


})

