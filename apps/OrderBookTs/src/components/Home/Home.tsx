import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {getSymbols} from '../../services/BinanceService';
interface HomeProps {
  navigation: NavigationProp<any, any>;
}

const Home = (props: HomeProps) => {
  const [symbols, setSymbols] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const rsp: any = await getSymbols();
      setSymbols(rsp.symbols.map((el: any) => el.symbol));
    })();
  }, []);

  const onPressTab = () => props.navigation.navigate('Tab');
  return (
    <>
      <Button title="Go to Tab" onPress={onPressTab} />
      <View style={styles.container}>
        <FlatList
          data={symbols}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Home;
