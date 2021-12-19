import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CustomText from './CustomText';

const AddItem = ({addItem}) => {
  // Input state
  const [text, setText] = useState('');

  // Input Handler
  const onChange = textValue => setText(textValue);
  const onPress = () => {
    // Add Item
    addItem(text);
    // Clear Input
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onPress}>
        <CustomText customStyle={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#3F3E42',
  },
  input: {
    height: 50,
    padding: 6,
    paddingHorizontal: 15,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    color: '#3F3E42',
    fontSize: 16,
    borderRadius: 4,
    fontFamily: 'Ubuntu-Regular',
  },
  btn: {
    backgroundColor: '#4DB33D',
    padding: 10,
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
