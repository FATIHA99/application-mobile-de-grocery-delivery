import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../res'

const BoxRelatedItem = ({ image, name, price, bgColor }) => {
    return (
        <TouchableOpacity style={styles.container(bgColor)}>

            <View style={styles.wrapperImage}>
                <Image source={image} style={styles.image}></Image>
            </View>
            <View style={styles.container}>
                <View style={styles.wrapperDetail}>
                    <Text>{name}</Text>
                    <Text style={styles.textPrice}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BoxRelatedItem

const styles = StyleSheet.create({
    container: bgColor => ({
        height: 120,
        width: 120,
        backgroundColor: bgColor,
        borderRadius: 12,
        padding: 5,
        marginRight: 15,
      }),
      wrapperImage: {justifyContent: 'center', alignItems: 'center', flex: 1},
      image: {height: 50, width: 50, resizeMode: 'contain'},
      wrapperDetail: {justifyContent: 'flex-end'},
      rowDetail: {
        backgroundColor: colors.white,
        height: 25,
        width: '100%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
      },
      textPrice: {fontSize: 12},

})