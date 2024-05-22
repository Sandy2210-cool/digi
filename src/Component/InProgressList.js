import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { String } from '../Constant/Constant';


const InProgressList = () => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    return (
        <View style={[styles.container,{ width: screenWidth - 80}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, width: '90%' }}>
                <Image source={require('../Assets/laptop.jpeg')} style={{ height: 130, width: 80, marginRight: 5, borderRadius: 10 }} resizeMode='cover' />
                <View style={{ left: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', width: '80%' }}>{String.listText}</Text>
                    <Text style={{ color: 'blue', fontSize: 14, marginBottom: 20, marginTop: 10 }}>{String.leftDays}</Text>
                    <Progress.Bar borderWidth={0} unfilledColor={'grey'} progress={0.9} width={170} />
                    <Text style={{ color: 'black', fontSize: 14, marginTop: 10, fontWeight: '500' }}>{"90%"}</Text>

                </View>
            </View>
        </View>
    )
}

export default InProgressList

const styles = StyleSheet.create({
    container:{
        height: 'auto', alignSelf: 'center', marginLeft: 10, backgroundColor: '#fff', shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 3,
        borderRadius: 14,
        shadowOpacity: 0.2,
        paddingVertical: 20,
        justifyContent: 'center',
    }
})