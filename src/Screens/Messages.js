import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    KeyboardAvoidingView,
    StatusBar,
    ScrollView
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import * as color from '../Colors'
import * as fontsize from '../FonSizes'

//components 
import NoMessage from '../Components/NoMessage';
import ShortMsg from '../Components/ShortMsg';





export default class Messages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateModal: false
        }
    }



    _sendMsg = () => {

    }





    render() {

        return (
            <KeyboardAvoidingView style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }} behavior="padding">

                <View style={styles.Messages}>
                    <ScrollView contentContainerStyle={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingBottom: 80
                    }} >
                        {/* <NoMessage /> */}
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />
                        <ShortMsg goToChat={() => this.props.navigation.push('Chat')} />


                    </ScrollView>
                    
                   
                </View>
            </KeyboardAvoidingView>



        );
    }
}

const styles = ({
    Messages: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        backgroundColor: color.color_4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: color.color_1,

    }




})