import { StatusBar, StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, {useEffect} from 'react'
import WebView from 'react-native-webview'

const WebViewComponent = (props) => {
  
  useEffect(() => {
    // Show notification when the component mounts
    ToastAndroid.show('Redirected to external Website!', ToastAndroid.LONG, ToastAndroid.BOTTOM);
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingTop: StatusBar.currentHeight}}>
    <WebView source={{uri : `${props.route.params.url}`}}/>
    </View>
  )
}

const styles = StyleSheet.create({})
export default WebViewComponent
