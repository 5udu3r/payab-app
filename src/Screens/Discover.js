import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    TextInput,
    StatusBar,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import * as color from '../Colors';
import * as fontsize from '../FonSizes'


//components
import OtherRequest from '../Components/OtherRequest';
import NoOtherRequest from '../Components/NoOtherRequest';




export default class Pakhahan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focusSearchInput: false


        };
    }



    // change route
    _navigate = (path) => {
        // Actions[path]()
    }

    _search = (e) => {

    }

    _focusSearchInput = () => {
        this.setState({ focusSearchInput: true })
    }

    _blurSearchInput = () => {
        this.setState({ focusSearchInput: false })
    }

    render() {




        return (


            <View style={styles.HOME} >



                <View style={styles.BODY} >

                    <View style={styles.number_inputs}>

                        <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 10 }} >
                            <View style={styles.input_box} >
                                <TextInput
                                    style={styles.input_box_2}
                                    onChangeText={(e) => this._search(e)}
                                    value={this.state.number}
                                    selectionColor={color.color_3}
                                    placeholder="جستجو در درخواست ها ..."
                                    onFocus={this._focusSearchInput}
                                    onBlur={this._blurSearchInput}
                                />
                                <SimpleLineIcons style={{
                                    position: 'absolute',
                                    left: 10,
                                    transform: [{ rotate: '90deg' }], top: 10
                                }}
                                    name='magnifier' size={fontsize.fontsize20}
                                    color={this.state.focusSearchInput ? color.color_3 : color.inactive  } />

                            </View>
                        </View>


                    </View>

                    <ScrollView onScroll={this._onScroll} contentContainerStyle={styles.scroll_request} >
                        <OtherRequest press={()=>this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={()=>this.props.navigation.push('RequestDetail')} />
                        <OtherRequest press={()=>this.props.navigation.push('RequestDetail')} />

                        {/* <NoOtherRequest /> */}


                    </ScrollView>




                </View>

            </View>







        );
    }
}

const styles = ({


    HOME: {
        backgroundColor: color.color_1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - StatusBar.currentHeight,
        alignItems: 'center',

    },

    BODY: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'

    },

    number_inputs: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    input_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightgrey,
        borderRadius: 20,
        height: 40,
        width: '100%',
        overflow: 'hidden'
    },
    input_box_2: {
        height: 40,
        width: '100%',
        paddingLeft: 10,
        fontSize: fontsize.fontsize12,
        fontFamily: 'ISF',
        paddingRight: 15,
        textAlign: 'right',
        color:color.color_3
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

