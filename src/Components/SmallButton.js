import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator, Dimensions, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';




const SmallButton = (props) => (
    <TouchableOpacity style={{
        width: props.width,

        borderRadius: props.borderRadius,
        backgroundColor: props.bgColor,
        marginBottom: props.marginBottom,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }} activeOpacity={.5}
        onPress={props.press}
    >
        {
            props.loading ?
                <ActivityIndicator size="small" color={props.loadingColor} />
                :
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: props.paddingVertical,
                    paddingHorizontal: props.paddingHorizontal,
                }} >

                    <Text
                        style={{
                            fontSize: props.fontSize,
                            fontFamily: 'ISBold',
                            color: props.color,
                            textAlign: 'center',
                        }}
                    >{props.title}</Text>
                    {
                        props.icon ?
                            <SimpleLineIcons style={{ marginLeft: 10 }} name={props.iconName} size={props.iconSize} color={props.iconColor} />
                            : null

                    }
                </View>
        }
    </TouchableOpacity>
)


export default SmallButton;

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