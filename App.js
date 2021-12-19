import React, {useState, useEffect} from 'react';
import uuid from 'react-native-uuid';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import CustomText from './components/CustomText';

const App = () => {
  // Items State
  const [items, setItems] = useState([]);

  // Retreive Data
  useEffect(() => {
    const getData = async () => {
      const data = await fetchItems();
      setItems(data);
      console.log(data);
    };
    getData();
    // const clearAll = async () => {
    //   try {
    //     await AsyncStorage.clear();
    //   } catch (e) {
    //     // clear error
    //   }
    //   console.log('Done.');
    // };
    // clearAll();
  }, []);

  // Fetch All Items
  const fetchItems = async () => {
    try {
      const response = await AsyncStorage.getItem('items');
      const data = response != null ? JSON.parse(response) : [];
      if (!data) {
        // value previously stored
        Alert.alert(
          'Welcome',
          'Keep track of your shopping list by adding everything you need! ',
          [{text: "Let's Go"}],
        );
      }
      return data;
    } catch (e) {
      // error reading value
      Alert.alert('Error', e.message, [{text: 'OK'}]);
    }
  };

  // Add Item
  const addItem = async text => {
    try {
      if (!text) {
        Alert.alert('Empty Item', 'Please Enter an item first', [{text: 'OK'}]);
        return;
      }
      const newItem = {id: uuid.v4(), text};
      const newItems = items ? [newItem, ...items] : [newItem];
      setItems(newItems);
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
    } catch (e) {
      // saving error
      Alert.alert('Error', e.message, [{text: 'OK'}]);
    }
  };

  // Delete Item
  const deleteItem = async id => {
    try {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
      await AsyncStorage.setItem(
        'items',
        JSON.stringify(items.filter(item => item.id !== id)),
      );
    } catch (e) {
      // saving error
      Alert.alert('Error', e.message, [{text: 'OK'}]);
    }
  };

  const renderItem = ({item}) => (
    <ListItem item={item} deleteItem={deleteItem} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.formContainer}>
        <AddItem addItem={addItem} />
      </View>
      {items.length <= 0 ? (
        <View style={styles.emptyContainer}>
          <CustomText customStyle={styles.empty}>
            Shopping List is Empty
          </CustomText>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    padding: 30,
    paddingVertical: 50,
    fontSize: 22,
    color: '#aa0000',
    backgroundColor: '#f1000022',
    borderRadius: 5,
    textAlign: 'center',
    opacity: 0.6,
  },
});

export default App;
