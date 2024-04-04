import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import footsaiah from '../assets/footsaiah.jpg'

const StoriesComponent = () => {
  return (
    <ScrollView horizontal style={Styles.ScrollStyle}>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
        <Image source={footsaiah} style={Styles.ImageStyle}/>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    ImageStyle: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 20,
    },
    ScrollStyle: {
        paddingTop: 10,
        paddingBottom: 5
    },
})

export default StoriesComponent