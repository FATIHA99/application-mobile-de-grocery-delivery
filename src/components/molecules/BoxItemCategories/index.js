import { StyleSheet, Image, TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import {colors,fonts} from '../../../res'


const BoxItemCategories = ({ text, color, icon, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapperImg(color)}>
             <Image source={icon} style={styles.image} />
            </View>

            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default BoxItemCategories;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 17,
        borderBottomWidth:2,
        borderBottomColor: colors.redTwo,
        borderBottomLeftRadius:50,
    },
    wrapperImg: color => ({
        height: 90,
        width: 90,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        // borderRadius: 10,
        // borderBottomRadius:12,
        // borderBottomColor: colors.red,
        // borderWidth:2,
        // borderTopWidth:1,
    }),
    text: {
        marginTop: 10,
        color: colors,
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        paddingBottom:12,
        marginLeft:6,
    },
    image:{
        width:80,
        height:80,
        backgroundSize:'cover'
    }
});