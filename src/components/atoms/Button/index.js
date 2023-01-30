import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../res/colors'
import { fonts } from '../../../res/fonts'

const Button = ({onPress,text}) => {
    return (
        <TouchableOpacity style={styles.container} onPress = {onPress}>
            <Text style={styles.text}>
               { text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.redTwo,
        height: 50,
        width: 259,
        // borderRadius: 40,
borderTopRightRadius:30,
borderBottomLeftRadius:30,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.Medium,
        color: colors.white,
        textAlign: 'center',
    }

})