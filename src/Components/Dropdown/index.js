import {StyleSheet} from 'react-native';
import React from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = props => {
  return (
    <DropDownPicker
      open={props.open}
      value={props.value}
      items={props.items}
      setOpen={props.setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
      listMode={props.listMode}
      onPress={props.onPress}
      onChangeValue={props.onChangeValue}
      containerStyle={props.containerStyle}
      style={props.style}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({});
