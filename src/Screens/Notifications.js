import React, { Component } from 'react';
import {
    View,
    Dimensions,
    ScrollView,
    StatusBar,
} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as color from '../Colors';
import * as fontsize from '../FonSizes'

//components
import NoOtherRequest from '../Components/NoOtherRequest'
import Notification from '../Components/Notification';



export default class Notifications extends Component {

    constructor(props) {
        super(props)
        this.state = {



        };
    }







    render() {

        return (

            <View style={styles.Notifications} >


                <View style={styles.BODY} >
                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
                        <Notification
                            press={() => this.props.navigation.push('ViewProfile')}
                            title="شهاب حسینی شما را فالو کرد"
                            description="برای دیدن پروفایل فشار دهید"
                            iconName="user"
                            iconColor={color.accept} />
                        <Notification
                            press={() => this.props.navigation.push('ViewProfile')}
                            title="محمد کمالی درخواست شما را برای کمک پذیرفت"
                            description="برای دیدن پروفایل فشار دهید"
                            iconName="plus"
                            iconColor={color.accept} />
                        <Notification
                            press={() => this.props.navigation.push('ViewProfile')}
                            title="مهدیس عابدی درخواست سفر شما را پذیرفت"
                            description="برای دیدن پروفایل فشار دهید"
                            iconName="plus"
                            iconColor={color.accept} />
                    </ScrollView>

                </View>





            </View>







        );
    }
}

const styles = ({


    Notifications: {
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

