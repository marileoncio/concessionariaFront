import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";



function Home(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3a415a" barStyle="light-content" />
            <Head/>
            <StatusBar backgroundColor="#3a415a" barStyle="light-content" />

            <Footer/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        alignItems: 'flex-end'
    },
    header: {
        backgroundColor: '#3a415a',
        alignItems: 'center',
        paddingVertical: 25
    },
    logo: {
        width: 390,
        height: 629,


    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails: {
        marginLeft: 10,
        flex: 1

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#666'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1

    }
})


export default Home;