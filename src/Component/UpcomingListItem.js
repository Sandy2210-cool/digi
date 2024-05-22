import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { String } from '../Constant/Constant';


const UpcomingListItem = (props) => {
  return (
    <View style={{
        width: '99%', height: 'auto', alignSelf: 'center', backgroundColor: '#fff', shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 5,
        marginTop:2,
        borderRadius: 14,
        paddingVertical: 10,
        shadowOpacity: 0.2,
        marginBottom:10
    }}>
        {props?.index == 0 ?
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <Image source={require('../Assets/laptop.jpeg')} style={{ height: 60, width: 70, borderRadius: 10 }} resizeMode='cover' />
                <View style={{ left: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', width: '100%' }}>{String.listText}</Text>
                    <Text style={{ color: 'blue', fontSize: 14, marginBottom: 20, marginTop: 5 }}>{String.leftDays}</Text>
                    <Progress.Bar borderWidth={0} unfilledColor={'grey'} progress={0.1} width={200} />

                </View>
            </View>
            : <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, opacity: 0.5, }}>
                <Image source={require('../Assets/laptop.jpeg')} style={{ height: 60, width: 70, borderRadius: 10 }} resizeMode='cover' />
                <View style={{ left: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', width: '100%' }}>{"Digital Shopper Journey"}</Text>
                    <Image source={require('../Assets/locked.png')} style={{ height: 20, width: 70, marginTop: 10 }} resizeMode='cover' />
                </View>
            </View>
        }
    </View>
  )
}

export default UpcomingListItem

const styles = StyleSheet.create({})