import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Catagories from "../components/Catagories";
import TrendingNews from "../components/TrendingNews";
import RandomNews from "../components/RandomNews";
import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { auth } from '../firebase';

const HomeScreen = () => {
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace('Login')
        }).catch(error => alert(error.message))
    }

    const navigation = useNavigation();
    return (
        <>
            <View style={[styles.container, { flex: 1 }]}>
                <View style={[styles.heading]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Feather name="user" size={25} color="white" style={{paddingHorizontal: 10}}/>
                    </TouchableOpacity>
                    <Image
                        style={{ height: 60, width: 100 }}
                        source={{
                            uri: "https://a.storyblok.com/f/47007/1201x628/6142f06af0/how-to-build-a-news-app.png",
                        }}
                    />
                    <TouchableOpacity onPress={handleSignOut}>
                        <MaterialIcons name="logout" size={25} color="white" style={{paddingHorizontal: 10}}/>
                    </TouchableOpacity>
                </View>

                <Catagories navigation={navigation} />
                <Text
                    style={{
                        fontSize: 15,
                        paddingLeft: 10,
                        fontWeight: "600",
                        marginTop: 10,
                    }}
                >
                    Trending News
                </Text>
                <TrendingNews />
                <View
                    style={{
                        borderWidth: 0.25,
                        borderRadius: 1,
                        marginLeft: "3%",
                        marginRight: "3%",
                    }}
                ></View>
                <RandomNews />
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // paddingTop: StatusBar.currentHeight || 30,
    },
    heading: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: StatusBar.currentHeight - 5 || 30,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: "#fb696a",
        elevation: 5,
    },
});
