import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventList from './src/components/EventList';

export default function App() {
  return (
    <View style={styles.container}>
      <EventList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fd0',
  },
});
