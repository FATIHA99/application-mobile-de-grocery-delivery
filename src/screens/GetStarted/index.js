import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../res/colors'
import { GetstartedImage } from '../../res/images'
import { fonts } from '../../res/fonts/index'
import{ Button , Gap} from '../../components'
// import Gap from '../../components/atoms/Gap'

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Image source={GetstartedImage} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>t9adia 7daak</Text>
        <Text style={styles.txtSlogan}>ri b click</Text>
      </View>
      <Gap height={90} />
      <Button text='Click' onPress={()=>navigation.replace('MainApp')}/>
    </View>

  );
};

export default GetStarted

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 20, justifyContent: 'center' },
  image: { height: 225, width: '100%', resizeMode: 'stretch' },
  wrapperSlogan: { marginTop: 51 },

  txtSlogan: {
    fontSize: 30,
    color: colors.red,
    textAlign: 'center',
    fontFamily: fonts.Black
  },

})