import {StyleSheet, View, FlatList, Pressable, Dimensions} from 'react-native';
import React from 'react';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

import {data, style} from '../constants';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAmount} from '../redux/Slice/user';

const ExamFees = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <>
      {Object.keys(item).map((i, index) => (
        <View style={style.outercardContainer} key={index}>
          <Pressable
            onPress={() => {
              dispatch(setAmount(item[i].ALL_COURSES.ALL_LEVEL.amount));
              navigation.navigate('CourseFee');
            }}
            style={style.cardContainer}>
            <Paragraph>{i}</Paragraph>
          </Pressable>
        </View>
      ))}
    </>
  );

  return (
    <View style={style.mainContainer}>
      <Header back={true}>Exam Fees</Header>
      <FlatList data={[data['Exam Fee']]} renderItem={renderItem} />
    </View>
  );
};

export default ExamFees;

const styles = StyleSheet.create({});
