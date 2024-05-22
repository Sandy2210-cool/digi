import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../Assets/menu.png')} style={{ height: 30, width: 30, tintColor: 'white' }} />
                    <Text style={styles.headerTitle}>Learning Hub</Text>
                </View>
              
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Image source={require('../Assets/notification.png')} style={{ height: 25, width: 25, tintColor: 'white', marginRight: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../Assets/account.png')} style={{ height: 25, width: 25, tintColor: 'white', marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e2d',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft:20
    },
    headerIcons: {
        flexDirection: 'row',
    },
})