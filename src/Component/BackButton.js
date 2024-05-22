import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backContainer}>
    <Image source={require('../Assets/back.png')} style={{ height: 15, width: 20 }} />
    <Text style={styles.backText}>Back to Dashboard</Text>
</TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    backText: {
        marginLeft: 10,
        fontSize: 16,
    },
})