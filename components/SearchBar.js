import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
    return (<View style={styles.container}>
        <Fontisto name='search' color='#858585' size={20}/>
        <TextInput style={styles.textInput}>Search</TextInput>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        borderColor: '#858585',
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    textInput: {
        paddingLeft: 10,
        fontSize: 20,
        color: '#858585'
    }
});

export default SearchBar;