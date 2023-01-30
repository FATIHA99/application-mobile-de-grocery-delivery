import { StatusBar, Image, StyleSheet, SafeAreaView, Text, useColorScheme, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  Drinks,
  IC_Fruits,
  Fruit,
  Search,
  Candy,
  Vegetables,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from '../../res';


import Header from '../../components/molecules/Header'
// import { colors, fonts, IC_Fruits } from '../../res'
import BoxItemCategories from '../../components/molecules/BoxItemCategories'
import Gap from '../../components/atoms/Gap'
import BoxItemTopProduct from '../../components/molecules/BoxItemTopProduct'

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
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
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* header */}
        <Header drawer />
        <ScrollView howsHorizontalScrollIndicator={false}>
          {/* search bar */}
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder='Search' style={styles.TextInputSearch} />
              {/* <Search /> */}
              <Image source={Search} style={styles.image} />

            </View>
          </View>
          {/* categorie */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}>
              <BoxItemCategories
                icon={Fruit }
                color='rgba(169,178,169,0.5)'
                text='Fruits'
                onPress={() => { navigation.navigate('Categories', 'Fruits') }}

              />
            <BoxItemCategories
                icon={Vegetables}
                color='rgba(169,178,19,0.5)'
                text='Vegetables'
                onPress={() => { navigation.navigate('Categories', 'Vegetables') }}

              />
                <BoxItemCategories
                icon={Drinks}
                color='rgba(169,17,169,0.5)'
                text='Drinks'
                onPress={() => { navigation.navigate('Categories', 'Drinks') }}

              />

            <BoxItemCategories
                icon={Candy }
                color='rgba(19,178,169,0.5)'
                text='Bakery'
                onPress={() => { navigation.navigate('Categories', 'Bakery') }}

              />
  {/* 
              <BoxItemCategories
                icon={<IC_Bakery2 />}
                color='rgba(169,78,69,0.5)'
                text='Fruits'
                onPress={() => { navigation.navigate('Categories', 'Fruits') }}

              /> */}
            </ScrollView>
          </View>
          <Gap height={15} />
          {/* top product  */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.titleTopProducts}> Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
                return (
                  <BoxItemTopProduct
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate('Detail', item)}
                  />
                );
              })}
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.white,
    borderBottomWidth : 1,
    borderBottomColor:colors.red,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,

  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.redTwo,
    padding: 20,
  },

  scrollViewCategories: {
    paddingLeft: 20,
  },

  wrapperHeadTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleTopProducts: {
    color: colors.redTwo,
    fontFamily: fonts.SemiBold,
    fontSize: 20
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12
  },

  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 26,
    height: 24,
  },
  TextInputSearch:{
    color:colors.red,
    fontSize:15,
  }

})