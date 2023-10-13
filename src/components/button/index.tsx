import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IProps {
  onPressAddButton: () => void;
}

const CircleAddButton = (props: IProps): JSX.Element => {
  const {onPressAddButton} = props;
  return (
    <TouchableOpacity onPress={onPressAddButton} style={styles.buttonStyle}>
      <Text style={styles.buttonLabelStyle}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 80,
    height: 80,
    backgroundColor: '#90EE90',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabelStyle: {
    fontSize: 24,
  },
});

export default CircleAddButton;
