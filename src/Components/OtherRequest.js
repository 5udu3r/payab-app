

import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

//components
import SmallButton from './SmallButton';
import * as fontsize from '../FonSizes'


export default class OtherRequest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            like: false,
        }
    }

    _addToFavorite = async () => {
        await this.setState((prevState) => {
            return { like: !prevState.like };
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.OtherRequest}
                onPress={this.props.press}
                activeOpacity={.8}>
                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'space-between',
                    height: '100%'
                }} >


                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }} >
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize8,
                                fontFamily: 'IYB',
                                color: '#555',
                                textAlign: 'center'
                            }} >کسی میاد بریم رشت </Text>
                        </View>
                    </View>





                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        backgroundColor: "#f6f6f6",
                        padding: 5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            // marginLeft: 4,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize9,
                                fontFamily: 'ISF',
                                color: color.font,
                            }} >1398/08/28</Text>
                            <SimpleLineIcons style={{ marginLeft: 5 }} name='hourglass' size={12} color={color.color_3} />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            // marginLeft: 4,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: fontsize.fontsize9,
                                fontFamily: 'ISF',
                                color: color.font,
                                marginRight: 4
                            }} >سفر</Text>
                            <Image style={{ width: 12, height: 18 }} source={require('../../assets/icons/iconx.png')} />
                        </View>


                    </View>


                    <View style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 4,
                        width: '100%',
                        backgroundColor: color.lightgrey,

                    }}
                    >
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: "48%",
                            height: 32,
                            backgroundColor: this.state.like ? color.color_3 : color.white,
                            borderRadius: 20
                        }}
                            activeOpacity={.5}
                            onPress={this._addToFavorite}
                        >
                            <SimpleLineIcons name='heart' size={fontsize.fontsize14} color={this.state.like ? color.white : color.inactive} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: "48%",
                            height: 32,
                            backgroundColor: color.white,
                            borderRadius: 20
                        }}
                            activeOpacity={.5}
                            onPress={this.props.press}
                        >
                            <SimpleLineIcons name='eye' size={fontsize.fontsize14} color={color.inactive} />
                        </TouchableOpacity>

                    </View>




                </View>
            </TouchableOpacity >
        )
    }
}




const styles = ({
    OtherRequest: {
        width: (Dimensions.get('window').width - 40) / 3,
        backgroundColor: color.lightgrey,
        paddingTop: 5,
        borderRadius:20,
        borderBottomLeftRadius:  0,
        height: 100,
        elevation: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10
    },

    noRequestTitle: {
        fontSize: 14,
        fontFamily: 'ISFBold',
        color: '#333',
        marginBottom: 5,
    },
    noRequestText: {
        fontSize: 10,
        fontFamily: 'ISFBold',
        color: '#555'
    },

})


