import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();

    const handleDelete = async () => {
        try {
            await user?.delete();
            navigation.replace("Login");
            alert("User Account Deleted successfully");
        } catch (error) {
            console.error("Error deleting user:", error.message);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: "center", paddingTop: 50 }}>
            <Image
                style={{ height: 150, width: 300, borderRadius: 20 }}
                source={{
                    uri: "https://a.storyblok.com/f/47007/1201x628/6142f06af0/how-to-build-a-news-app.png",
                }}
            />
            <Text style={{ fontSize: 20, fontWeight: 500, marginTop: 25 }}>
                USER INFO
            </Text>
            <Image
                style={{ height: 100, width: 100, borderRadius: 20, marginTop: 5 }}
                source={{
                    uri: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                }}
            />
            <View
                style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
            >

                <Text style={{ fontSize: 20, fontWeight: "300", marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>Name: </Text>
                    {auth.currentUser?.displayName !== undefined ? auth.currentUser?.displayName : "Guest User"}
                </Text>

                <Text style={{ fontSize: 20, fontWeight: "300", marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>Email: </Text>
                    {auth.currentUser?.email !== undefined ? auth.currentUser?.email : "Guest User"}
                </Text>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>SignOut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={handleDelete}>
                        <Text style={styles.buttonText1}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0782F9',
        width: 200,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    button1: {
        backgroundColor: 'white',
        borderColor: '#0782F9',
        borderWidth: 1,
        width: 200,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText1: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});
export default ProfilePage;
