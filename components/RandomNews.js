import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable
} from "react-native";
import React, { useState, useEffect } from "react";
import API_KEY from "../components/Api_key";
import { useNavigation } from "@react-navigation/native";

const RandomNews = () => {
  const [news, setNews] = useState([]);
  const navigation = useNavigation();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        {news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {news.map((item, index) =>
              item.urlToImage ? (
                <Pressable
                  key={index}
                  onPress={() =>
                    navigation.navigate("WebView", {
                      url: item.url,
                    })
                  }
                >
                  <View style={styles.items}>
                    <View style={styles.text}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.date}>
                        Published on: {formatDate(item.publishedAt)}
                      </Text>
                    </View>
                    <Image
                      source={{ uri: item.urlToImage }}
                      style={[styles.image]}
                    />
                  </View>
                </Pressable>
              ) : null
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: StatusBar.currentHeight + 5 || 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  items: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 100,
  },
  image: {
    height: 100,
    width: 150,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    paddingVertical: "auto",
    paddingRight: 7,
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
  },
});
export default RandomNews;
