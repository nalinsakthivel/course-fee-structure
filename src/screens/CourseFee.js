import {StyleSheet, View, Dimensions, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import DropDown from '../components/Dropdown';

import {ALL_COURSES, ALL_LEVEL, colours, data, style} from '../constants';

import {useSelector} from 'react-redux';

const screenWidth = Dimensions.get('screen').width;

const CourseFee = () => {
  const fee = useSelector(state => state.user.fee);
  const amt = useSelector(state => state.user.amount);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(ALL_COURSES);
  const [courses, setCourses] = useState(null);
  const [amount, setAmount] = useState(null);

  const onAmount = () => {
    setAmount(amt);
  };

  const renderItem = ({item}) => (
    <>
      {Object.keys(item.FOREIGN.ALL_COURSES).map((i, index) => (
        <View style={style.outercardContainer} key={index}>
          <Pressable
            onPress={() => {
              setCourses(null);
              setAmount(item.FOREIGN.ALL_COURSES[i].amount);
            }}
            style={styles.cardContainer}>
            <Paragraph>{i}</Paragraph>
          </Pressable>
        </View>
      ))}
    </>
  );

  const OnLevels = () => {
    if (fee === 'Exam Fee') {
      return (
        <>
          {ALL_LEVEL.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={styles.cardContainer}
                onPress={() => {
                  setCourses(null);
                  onAmount();
                }}>
                <Paragraph style={style.label}>{item.course}</Paragraph>
              </Pressable>
            );
          })}
        </>
      );
    } else {
      return (
        <FlatList data={[data['Application Fee']]} renderItem={renderItem} />
      );
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header back={true}>Course Fee</Header>
      <View style={styles.headingContainer}>
        <Paragraph>Courses</Paragraph>
      </View>
      <View style={styles.outerContainer}>
        <DropDown
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listmode="scroll"
          containerStyle={styles.dropDownCon}
          style={styles.dropDownStyle}
          onPress={value => {
            setCourses(value);
            setAmount(null);
          }}
        />
      </View>
      {courses ? (
        <>
          <View style={styles.headingContainer}>
            <Paragraph>Levels</Paragraph>
          </View>
          <View style={styles.outerContainer}>
            <OnLevels />
          </View>
        </>
      ) : null}
      {amount ? (
        <>
          <View style={styles.headingContainer}>
            <Paragraph style={styles.amountTitle}>Amount :</Paragraph>
          </View>
          <View style={styles.outerContainer}>
            <Paragraph style={styles.amountText}>₹ {amount}</Paragraph>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CourseFee;

const styles = StyleSheet.create({
  headingContainer: {
    margin: 15,
  },
  dropDownCon: {
    height: 50,
    width: screenWidth * 0.87,
  },
  dropDownStyle: {
    backgroundColor: colours.LightOrange,
    borderWidth: 1,
  },
  outerContainer: {
    alignItems: 'center',
  },

  cardContainer: {
    width: screenWidth * 0.87,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: colours.SnowGrey,
    marginVertical: 10,
    backgroundColor: colours.LightOrange,
  },

  amountText: {
    color: colours.ButtonBlueColor,
    fontWeight: 'bold',
    fontSize: 50,
  },
  amountTitle: {
    color: colours.Black,
    fontWeight: 'bold',
  },
});
