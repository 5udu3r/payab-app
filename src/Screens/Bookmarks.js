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
import NoOtherRequest from '../Components/NoOtherRequest'
import OtherRequest from '../Components/OtherRequest';



export default class Bookmarks extends Component {

    constructor(props) {
        super(props)
        this.state = {



        };
    }







    render() {

        return (

            <View style={styles.Bookmarks} >



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

                    }} >علاقه مندیها</Text>
                </View>



                <View style={styles.BODY} >
                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
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


    Bookmarks: {
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

