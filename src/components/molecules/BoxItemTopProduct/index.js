import { StyleSheet, Image ,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts, IC_Love,Star,IL_Brokoli } from '../../../res'
import Gap from '../../atoms/Gap'

const BoxItemTopProduct = ({ bgColor, icon, text, price, onPress }) => {
    return (
        <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
        <View style={{top: -40}}>
          <View>
            <Image source={icon} style={styles.image} />
            <Gap height={20} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <Gap height={20} />
          <View style={styles.price}>
            <Text style={styles.wrapperButtom}>${price}</Text>
            <TouchableOpacity>
              {/* <IC_Love /> */}
              <Image source={Star} style={styles.star}/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export default BoxItemTopProduct

const styles = StyleSheet.create({
    container: bgColor => ({
        height: 160,
        width: 150,
        backgroundColor: bgColor,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 40,

    }),
    text: {
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: fonts.Medium,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    wrapperButtom: {

        fontSize: 18,
        fontFamily: fonts.Medium
    },
    image: {
        height: 110,
        width: 110,
        resizeMode: 'contain',
        marginLeft: 20

    },
    star : {
     width:20,
     height:20, 
    }
})