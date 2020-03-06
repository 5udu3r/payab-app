import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GiftedChat, Actions, SystemMessage, Send } from 'react-native-gifted-chat'

//components 

import * as color from '../Colors'
import * as fontsize from '../FonSizes'

import moment from 'moment'




export default class Chat extends Component {

    constructor(props) {
        super(props)
    }



    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: '',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }


    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{ marginRight: 5, paddingLeft: 5 }}>
                    <FontAwesome5 style={{
                    }}
                        name='chevron-circle-right'
                        size={fontsize.fontsize40}
                        color={color.color_3} />
                </View>
            </Send>
        );
    }



    render() {

        return (
           
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
                placeholder="پیامی بنویس .."
                alwaysShowSend={true}
                locale={'fa'}

                dateFormat={moment().format('YYYY/M/D')}
                renderSend={this.renderSend}
                scrollToBottom={true}
                scrollToBottomComponent={() => {
                    return (
                        <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: 'center' }}>
                            <FontAwesome5 
                                name='caret-down'
                                size={30}
                                color={color.color_3} />
                        </View>
                    )
                }}
            
                scrollToBottomStyle={{ backgroundColor: '#000', fontSize: fontsize.fontsize90, borderRadius: 0 }}

            />


        );
    }
}

const styles = ({




})