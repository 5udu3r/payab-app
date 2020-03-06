import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as color from '../Colors';
import * as fontsize from '../FonSizes'

const ShortMsg = (props) => (
    <TouchableOpacity style={styles.ShortMsg}
        activeOpacity={.8}
        onPress={props.goToChat}
    >

        <View style={{
            width: Dimensions.get('window').width - 20 ,
            height:'100%',
            minHeight: 20,
            backgroundColor: color.white,
            padding: 10,
            borderRadius:15,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
        }} >

            <View style={{ 
                flexDirection: 'column',
                alignItems:'center', 
                justifyContent: 'space-between' ,
                 width: Dimensions.get('window').width - 100,
                 height:50
                 }} >
                <View style={{ flexDirection: "row", justifyContent: 'space-between' , alignItems:'center' ,width:'100%'}} >
                    <Text style={{fontFamily:"ISFBold" ,color:color.color_2, fontSize:12}} >1398/08/08  10:45</Text>
                    <Text style={{fontFamily:"ISFBold" ,color:color.font, fontSize:16}} >محمد کمالی</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: 'space-between' , alignItems:'center' ,width:'100%'}} >
                   <Text style={{
                       fontFamily:"ISFBold" ,
                       color:color.white,
                       backgroundColor:color.color_3,
                       minWidth:15,
                       height:15,
                       borderRadius:10,
                        textAlign:'center', 
                        fontSize:fontsize.fontsize10,
                        paddingTop:1,
                        paddingHorizontal:2
                        }} >4</Text>
                    <Text style={{fontFamily:"ISFMedium" ,color:color.font, fontSize:fontsize.fontsize12}}>
                        آقا من برای تور امادم میتونم بیام
                   </Text>

                </View>
            </View>
            <View style={{ width: 50, height: 50,borderRadius:10,overflow:'hidden', justifyContent: 'center', alignItems: 'center' }} >
                <Image style={{ width: "100%", height: "100%",borderRadius:10 }} source={require('../../assets/images/ken.jpg')} />
            </View>
        </View>

    </TouchableOpacity >
)



const styles = ({
    ShortMsg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        marginTop: 10,
    },

    my_text_title: {
        fontSize: fontsize.fontsize14,
        fontFamily: 'ISFMedium',
        color: '#333',
    },


})


export default ShortMsg

