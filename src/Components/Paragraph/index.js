import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {colours} from '../../constants';

const Paragraph = props => {
  return (
    <>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colours.Black,
  },
});
