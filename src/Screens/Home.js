import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';


import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import NoOtherRequest from '../Components/NoOtherRequest'
import OtherRequest from '../Components/OtherRequest';



export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {};

    }







    render() {

        return (

            <View style={styles.HOME} >


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

                        }} onPress={() => this.props.navigation.push('Messages')} >
                            <View style={{
                                width: 40, height: 40, justifyContent: 'center',
                                alignItems: 'center', borderRadius: 10 ,
                            }} >

                            <SimpleLineIcons style={{ marginLeft: 5 }} name='bubbles' size={fontsize.fontsize24} color={color.color_3} />
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
                        }} onPress={() => this.props.navigation.openDrawer()} >
                            <View style={{
                                width: 40, height: 40, justifyContent: 'center',
                                alignItems: 'center', borderRadius: 10, overflow: 'hidden'
                            }} >
                                {/* <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/images/jason.webp')} /> */}
                                {/* <Text style={{ width: 5, height: 5, position: 'absolute', backgroundColor: color.color_3, borderRadius: 4, top: 12, left: 12 }} ></Text> */}
                                <Text style={{ width: 27, height: 2, position: 'absolute', backgroundColor: color.color_3, borderRadius: 4, bottom: 15, right: 12 }} ></Text>
                                <Text style={{ width: 17, height: 2, position: 'absolute', backgroundColor: color.color_3, borderRadius: 4, top: 14, right: 12 }} ></Text>
                                {/* <Text style={{ width: 5, height: 5, position: 'absolute', backgroundColor: color.color_3, borderRadius: 4, bottom: 12, left: 12 }} ></Text> */}

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.BODY} >
                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
                        {/* <NoOtherRequest  /> */}
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={() => this.props.navigation.push('RequestDetail')} />
                    </ScrollView>

                </View>





            </View>







        );
    }
}

const styles = ({


    HOME: {
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
        width: Dimensions.get('window').width,
        // alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 300,
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        paddingLeft:10 ,


    },






})

