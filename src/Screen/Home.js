import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackButton from '../Component/BackButton';
import Header from '../Component/Header';
import InProgressList from '../Component/InProgressList';
import RecentlyListItem from '../Component/RecentlyListItem';
import UpcomingListItem from '../Component/UpcomingListItem';
import { String } from '../Constant/Constant';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()

    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

    const renderItem = () => {
        return <InProgressList />
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 10, }}>
                    <BackButton />
                    <View style={styles.progressView}>
                        <Text onPress={()=>navigation.navigate("Dashboard")} style={styles.progressText}>{String.inProgress}</Text>
                    </View>
                    <View style={{ height: 'auto', width: '100%', paddingVertical: 5 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={styles.flatListContainer}
                        />
                    </View>
                    <View style={styles.recentlyCompleted}>
                        <Text style={styles.sectionTitle}>{String.recentCompleted}</Text>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <RecentlyListItem />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.upcoming}>
                    <Text style={styles.sectionTitle}>{String.upcomingModule}</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <UpcomingListItem index={index} />
                        )}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer: {
        paddingVertical: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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