import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PageTwo = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text> Welcome to Page Two</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default PageTwo;
