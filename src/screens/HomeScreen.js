import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  Button 
} from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten'

const HomeScreen = (props) => {

    return (
      <Layout style={styles.container}>
        <Text> Dhakon App </Text>
        <Button onPress={props.toggleTheme} title="Switch Theme"/>
      </Layout>
    );
  }

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent :"center",
    alignItems : "center"
  }
})
