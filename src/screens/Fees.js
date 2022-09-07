import {StyleSheet, View, FlatList, Pressable, Alert} from 'react-native';
import React from 'react';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

import {data, style} from '../constants';

import {useDispatch} from 'react-redux';
import {setFee} from '../redux/Slice/user';

const Fees = ({navigation}) => {
  const dispatch = useDispatch();

  const nav = item => {
    dispatch(setFee(item));
    if (item === 'Application Fee') {
      navigation.navigate('ApplicationFee');
    } else if (item === 'Exam Fee') {
      navigation.navigate('ExamFee');
    } else {
      Alert.alert('Screen not found');
    }
  };

  const renderItem = ({item}) => (
    <>
      {Object.keys(item).map((item, index) => (
        <View style={style.outercardContainer} key={index}>
          <Pressable
            onPress={() => {
              nav(item);
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
      <Header>Fees</Header>

      <FlatList data={[data]} renderItem={renderItem} />
    </View>
  );
};

export default Fees;

const styles = StyleSheet.create({});
