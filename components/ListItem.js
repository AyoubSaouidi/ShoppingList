import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CustomText from './CustomText';

const ListItem = ({item, deleteItem}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <CustomText customStyle={styles.listItemText}>{item.text}</CustomText>
        <Icon
          name="remove"
          size={25}
          color="#4DB33D"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E8E7D5',
    borderRadius: 3,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: '#3F3E42',
  },
});

// Props Types
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
