import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecentlyListItem = () => {
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  return (
    <View style={{
        width: screenWidth - 80, height: 'auto', alignSelf: 'center', marginRight: 10, backgroundColor: '#f3f8f5', shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderRadius: 14,
        shadowRadius: 3,
        shadowOpacity: 0.2,
        justifyContent: 'center',
        paddingVertical: 15,
        marginTop:2,
        marginBottom:2
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image source={require('../Assets/laptop.jpeg')} style={{ height: 60, width: 60, borderRadius: 10 }} resizeMode='cover' />
            <View style={{ left: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{"Digital Shopper Journey"}</Text>
                <Text style={{ color: 'green', fontSize: 14, marginTop: 5 }}>{"4 hours completed"}</Text>
            </View>
        </View>
    </View>
  )
}

export default RecentlyListItem

const styles = StyleSheet.create({})