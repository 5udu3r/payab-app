import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator, Dimensions, View } from 'react-native';
import * as color from '../Colors';
import * as fontsize from '../FonSizes'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BigButton = (props) => (
    <TouchableOpacity style={{
        height: props.height,
        marginTop: props.top,
        marginBottom: props.bottom,
        justifyContent: 'center',
        alignItems: 'center',
    }}
    onPress={props.press}
    activeOpacity={props.activeOpacity}
    >
        <View style={{
            width: props.width,
            backgroundColor: props.bgColor,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: props.borderColor,
            borderRadius: props.borderRadius,
            borderWidth:props.borderWidth,

        }} >


            {
                props.isLoading ?
                    <ActivityIndicator size="small" color="#fff" />
                    :
                    <Text style={{
                        fontFamily: 'ISBold',
                        color: props.textColor,
                        fontSize: props.size,
                        width: '100%',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        {props.title}
                        {props.icon ?
                            <FontAwesome5 name={props.iconName} size={fontsize.fontsize18} color={props.iconColor} /> :
                            null
                        }
                    </Text>
            }
        </View>

    </TouchableOpacity>
)


export default BigButton

{/* <GradientButton 
    width="90%"
    press={this._press}
    activeOpacity={.6}
    height={50}
    borderRadius={50}
    textColor="#333"
    size={16}
    title="عنوان"
    marginTop={20}
    marginBottom={20}
/> */}