import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StoreDispatch} from '../../redux/store';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/slice/todoSlice';
import {NavStackParamList} from '../../Navigator/screenParams';
import {RouteNameEnum} from '../../Navigator/screenTypes';

const AddTodoScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NavStackParamList, RouteNameEnum.AddTodo>
    >();

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch<StoreDispatch>();

  const onPressCreate = () => {
    dispatch(addTodo(todo));
    setTodo('');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            value={todo}
            inputMode="text"
            placeholder="What are you planning?"
            placeholderTextColor="#a9a9a9"
            onChangeText={setTodo}
            style={styles.textInput}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.createButtonStyle}
              onPress={onPressCreate}>
              <Text style={styles.createButtonTextStyle}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddTodoScreen;
