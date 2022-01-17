import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import { NativeBaseProvider, Button } from 'native-base';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [showFlatList, setShowFlatList] = React.useState(null);

  let onPressFlatList = () => {
    console.log("OK Pressed");
    setShowFlatList(1);
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={onPressFlatList}>Go to second screen</Button>
        {showFlatList != null &&
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
