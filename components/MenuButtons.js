import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const buttons = [
    {
        id: 1,
        name: 'video-camera',
        title: 'New Meeting',
        color: '#FF751F'
    },
    {
        id: 2,
        name: 'plus-square',
        title: 'Join'
    },
    {
        id: 1,
        name: 'calendar',
        title: 'Schedule'
    },
    {
        id: 1,
        name: 'upload',
        title: 'Share Screen'
    }
]

const MenuButtons = () => {
    return (<View style={styles.container}>
        {
            buttons.map((button, index) => <View key={index} style={styles.buttonContainer}>
            <TouchableOpacity style={{...styles.button, backgroundColor: button.color ? button.color: '#0470DC'}}>
                <FontAwesome name={button.name} size={23} color={'#efefef'} />
            </TouchableOpacity>
            <Text style={styles.newMeetingText}>{button.title}</Text>
        </View>)
        }
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: '#1F1F1F',
        borderBottomWidth: 1
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newMeetingText: {
        color: '#858585',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '600'
    }
});

export default MenuButtons;