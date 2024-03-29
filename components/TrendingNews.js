import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import API_KEY from "./Api_key";
import { useNavigation } from "@react-navigation/native";

const TrendingNews = () => {
    const [news, setNews] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
            .then((res) => res.json())
            .then((response) => {
                setNews(response.articles);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <View>
            {news.length === 0 ? (
                <ActivityIndicator color="black" size="large" />
            ) : (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {news.map((item, index) => (
                        item.urlToImage ?
                            <TouchableOpacity key={index} onPress={() => navigation.navigate("WebView", {
                                url: item.url,
                            })}>
                                <View style={{ margin: 10 }} key={index}>
                                    <Image
                                        source={{ uri: item.urlToImage }}
                                        style={[
                                            styles.image,
                                        ]}
                                    />
                                    <Text style={styles.text} >{item.title}</Text>
                                </View>
                            </TouchableOpacity> : null
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const width = 200;
const height = width/1.8;
// alert(height) 
const styles = StyleSheet.create({
    image: {
        height: height,
        width: width,
        borderRadius: 10
    },
    text: {
        height: 70,
        width: width,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    }
});
export default TrendingNews;
