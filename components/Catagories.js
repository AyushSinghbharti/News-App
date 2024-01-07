import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Catagories = ({ navigation }) => {
  const catagories = [
    "Entertainment",
    "Business",
    "Science",
    "Health",
    "Technology",
    "Sports",
  ];
  return (
    <View>
      <ScrollView horizontal={true}>
        {catagories.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GetNews", {
                  item,
                })
              }
            >
              <Text style={[styles.catagoriesView, {}]}>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  catagoriesView: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7.5,
    marginVertical: 7.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    elevation: 3.5,
  },
});
export default Catagories;
