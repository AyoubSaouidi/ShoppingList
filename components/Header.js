import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import CustomText from './CustomText';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <CustomText customStyle={styles.text}>{title}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: '#4DB33D',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 5,
  },
});

// Default Props values
Header.defaultProps = {
  title: 'Shopping List',
};

// Props Types
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
