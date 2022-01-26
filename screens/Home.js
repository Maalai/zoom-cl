import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import Contacts from "../components/Contacts";

const Home = () => {
    return (<View style={styles.container}>
        <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons />
        <Contacts />
    </SafeAreaView>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        height: '100%',
        paddingHorizontal: 20,
    }
})

export default Home;