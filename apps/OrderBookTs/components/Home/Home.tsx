import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
interface HomeProps {
  navigation: NavigationProp<any, any>;
}
const Home = (props: HomeProps) => {
  const onPressTab = () => props.navigation.navigate('Tab');
  return (
    <>
      <Button title="Go to Tab" onPress={onPressTab} />
      <View style={styles.sectionContainer}>
        <Text> Home Screen Page</Text>
      </View>
    </>
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

export default Home;
