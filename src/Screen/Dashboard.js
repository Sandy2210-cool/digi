import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackButton from '../Component/BackButton';
import Header from '../Component/Header';
import { String } from '../Constant/Constant';

const Dashboard = () => {

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
                    <BackButton />
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>{String.listText}</Text>
                        <Image
                            source={require('../Assets/prev.png')}
                            style={{ height: 15, width: 80 }}
                        />
                        <Image
                            source={require('../Assets/next.png')}
                            style={{ height: 15, width: 50 }}
                        />
                    </View>
                  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    flatListContainer: {
        paddingVertical: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundVideo: {
        height: 250,
        width: 300
    },

    progressView: {
        backgroundColor: '#daeff8',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 8,
        marginLeft: 10,

        width: 110,
        height: 'auto',
        borderRadius: 10
    },
    progressText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'blue'
    },
    recentlyCompleted: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    upcoming: {
        marginTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 15,
        height: 400
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ddd',

        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
})