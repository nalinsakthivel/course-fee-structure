import {StyleSheet, View, FlatList, Pressable} from 'react-native';
import React from 'react';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

import {data, style} from '../constants';

import {useNavigation} from '@react-navigation/native';

const ApplicationFees = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <>
      {Object.keys(item).map((item, index) => (
        <View style={style.outercardContainer} key={index}>
          <Pressable
            onPress={() => {
              navigation.navigate('CourseFee');
            }}
            style={style.cardContainer}>
            <Paragraph>{item}</Paragraph>
          </Pressable>
        </View>
      ))}
    </>
  );

  return (
    <View style={style.mainContainer}>
      <Header back={true}>Application Fees</Header>
      <FlatList data={[data['Application Fee']]} renderItem={renderItem} />
    </View>
  );
};

export default ApplicationFees;

const styles = StyleSheet.create({});
