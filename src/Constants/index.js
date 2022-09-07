import {StyleSheet, Dimensions} from 'react-native';

//Main JSON

export const data = {
  'Exam Fee': {
    INDIAN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 100,
        },
      },
    },
    NRI: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
    SAARC: {
      ALL_COURSES: {
        ALL_LEVEL: {
          amount: 600,
        },
      },
    },
  },
  'Application Fee': {
    INDIAN: {
      ALL_COURSES: {
        UG: {
          amount: 200,
        },
        'UG-DIPLOMA': {
          amount: 300,
        },
        PG: {
          amount: 500,
        },
      },
    },
    FOREIGN: {
      ALL_COURSES: {
        UG: {
          amount: 400,
        },
        'UG-DIPLOMA': {
          amount: 400,
        },
        PG: {
          amount: 700,
        },
      },
    },
  },
};

//All courses

export const ALL_COURSES = [
  {label: 'Medical', value: 'Medical'},
  {label: 'Dental', value: 'Dental'},
  {label: 'Ayurveda', value: 'Ayurveda'},
];

//All levels

export const ALL_LEVEL = [
  {course: 'UG'},
  {course: 'PG'},
  {course: 'DIPLOMA'},
  {course: 'Ph.D'},
];

//Colours

export const colours = {
  ButtonBlueColor: '#3598D0',
  Black: '#000000',
  LightOrange: '#fff3db',
  White: '#FFFFFF',
};

//Dimensions

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

// Styles

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colours.White,
  },
  cardContainer: {
    width: screenWidth * 0.87,
    height: screenHeight * 0.1,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: colours.SnowGrey,
    marginVertical: 15,
    backgroundColor: colours.LightOrange,
  },
  label: {
    color: colours.Black,
  },
  outercardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
