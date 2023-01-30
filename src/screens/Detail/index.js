import { ScrollView, StatusBar, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Header, Counter, BoxRelatedItem, Gap, Button } from '../../components';
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from '../../res';

const Detail = ({ route, navigation }) => {
  const dataParams = route.params;
  const bgColor = route.params.bgColor;
  const isDarkMode = useColorScheme() === 'dark';
  const [TotalItem, setTotalItem] = useState(1)
  const onCounterChange = value => {
    setTotalItem(value)
  }

  const dataRelatedItem = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

   
  ];
  return (
    <ScrollView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.wrapperImg}>
          <Image source={dataParams.icon} style={styles.image}></Image>
        </View>
        {/* content */}
        <View style={styles.content}>
          {/* top */}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
              {/* <Counter onValueChange={onCounterChange}/> */}
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.price}>{dataParams.price} / kg</Text>
          </View>
          {/* description */}
          <Text style={styles.desc}> {dataParams.desc}</Text>
          {/* related items */}
          <View style={styles.wrapperRelatedItems}>
            <Text style={styles.titleRelatedItems}>Related Items</Text>
            {/* scrol */}
            <ScrollView  showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapperBoxRelatedItems}>
                {/* related itm */}
                {
                  dataRelatedItem.map((item, index) => {
                    return (

                      <BoxRelatedItem 
                       key={index}
                       image={item.icon}
                       name = {item.name}
                       price = {item.price}
                       bgColor={item.bgColor}/>
                    )
                  })
                }
              </View>
            </ScrollView>
          </View>
          {/* btn  */}
          <Gap height={50}/>
          <Button text='Add to cart'/>
        </View>
      </View>
    </ScrollView>

  )
}

export default Detail

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor
  }),
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  content: {
    width: '100%',
    // height: '100%',
    height: 1000,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 34,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
  desc: {
    paddingHorizontal: 20,
  },
  wrapperRelatedItems: {
    marginTop: 25,
  },
  titleRelatedItems: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.primary,
    paddingHorizontal: 20,
  },
  wrapperBoxRelatedItems: {
    flexDirection: 'row',
    // backgroundColor:'black',
    marginTop: 20,
    paddingLeft: 20,
  },
})