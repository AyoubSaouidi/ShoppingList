import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({children, customStyle}) => (
  <Text style={[styles.baseStyle, customStyle]}>{children}</Text>
);

const styles = StyleSheet.create({
  baseStyle: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default CustomText;
