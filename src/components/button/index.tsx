import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

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

export default CircleAddButton;
