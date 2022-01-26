import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const contacts = [
    {
        type: 'starred',
        title: 'Starred'
    },
    {
        type: 'contact',
        title: 'Maalai',
        image: require('../assets/favicon.png')
    },
    {
        type: 'contact',
        title: 'Wife',
        image: require('../assets/favicon.png')
    },
    {
        type: 'contact',
        title: 'Kid',
        image: require('../assets/favicon.png')
    }
];

const Contacts = () => {
    return (<View style={styles.container}>
        {
            contacts.map((contact, index) =>
                <View key={index} style={styles.row}>
                    {
                        contact.type === 'starred' ? ( <View style={styles.starred}>
                            <AntDesign name='star' size={30} color='#efefef' />
                        </View>) : (
                            <Image source={contact.image} style={styles.image} />
                        )
                    }

                    <Text style={styles.text}>Starred</Text>
                </View>
            )
        }

    </View>)
};

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    starred: {
        backgroundColor: '#333333',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Contacts;