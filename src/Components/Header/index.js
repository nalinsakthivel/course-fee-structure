import {StyleSheet, Image, View, Dimensions, Pressable} from 'react-native';
import React from 'react';

import Paragraph from '../Paragraph';
import {colours} from '../../constants';

import {useNavigation} from '@react-navigation/native';

const screeWidth = Dimensions.get('screen').width;

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backiconContainer}
        onPress={() => {
          props.back ? navigation.goBack() : null;
        }}>
        {props.back ? (
          <Image
            source={require('../../Assets/Images/Back.png')}
            style={styles.backIcon}
          />
        ) : (
          <Image
            source={require('../../Assets/Images/React.png')}
            style={styles.logoIcon}
            resizeMode="stretch"
          />
        )}
      </Pressable>
      <View style={styles.textContainer}>
        <Paragraph style={styles.titleText}>{props.children}</Paragraph>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: screeWidth,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  backiconContainer: {
    width: screeWidth * 0.2,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  logoIcon: {
    width: 50,
    height: 30,
  },
  titleText: {
    fontSize: 25,
    color: colours.Black,
  },
  textContainer: {
    width: screeWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
