import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Back, IC_Cart, Shopping } from '../../../res'

const Header = ({ drawer, back, cart, onPress }) => {
    return (
        <View style={styles.wrapperHeader}>
            <TouchableOpacity onPress={onPress}>
                {/* <Back /> */}
                <Image source={Back}  style={styles.imageBack}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                {/* <IC_Cart /> */}
                <Image source={Shopping}  style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    image:{
        width:20,
        height:30,
    },
    imageBack:{
        width:20,
        height:20,
    }
})