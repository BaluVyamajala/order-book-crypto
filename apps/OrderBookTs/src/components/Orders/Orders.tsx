import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {DataTable} from 'react-native-paper';

export interface OrdersProps {
  navigation: NavigationProp<any, any>;
  route: any;
}

export interface Order {
  price: number;
  amount: number;
}

const OrdersPage = (props: OrdersProps) => {
  const symbol: string = props.route.params;

  const [orders, setOrders] = useState<Order[]>([]);
  const onPressHome = () => props.navigation.navigate('Home');

  useEffect(() => {
    const client = new W3CWebSocket(
      `wss://stream.binance.us:9443/ws/${symbol}@depth`,
    );

    client.onerror = function () {
      console.log('Connection Error');
    };

    client.onopen = function () {
      console.log('WebSocket Client Connected', symbol);
      const req = {
        method: 'SUBSCRIBE',
        params: [`${symbol.toLowerCase()}@depth`],
        id: 1,
      };
      client.send(JSON.stringify(req));
    };

    client.onclose = function () {
      console.log('echo-protocol Client Closed');
    };

    client.onmessage = function (e) {
      if (typeof e.data === 'string') {
        const rsp = JSON.parse(e.data);
        if (rsp && rsp.a) {
          setOrders(
            rsp.a.map((el: any) => {
              return {
                price: el[0],
                amount: el[1],
              };
            }),
          );
        }
      }
    };
    return () => {
      client.close();
    };
  }, [symbol]);

  return (
    <>
      <Button title="Go to Home" onPress={onPressHome} />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Price</DataTable.Title>
              <DataTable.Title>Volume</DataTable.Title>
            </DataTable.Header>

            {orders.map((el: Order) => {
              return (
                <DataTable.Row>
                  <DataTable.Cell>{el.price}</DataTable.Cell>
                  <DataTable.Cell>{el.amount}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </View>
      </ScrollView>
    </>
  );
};
export default OrdersPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff',
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  TableText: {
    margin: 10,
  },
});
