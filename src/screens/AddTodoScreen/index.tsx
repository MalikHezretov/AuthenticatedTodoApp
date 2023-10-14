import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StoreDispatch} from '../../redux/store';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/slice/todoSlice';
import {NavStackParamList} from '../../Navigator/screenParams';
import {RouteNameEnum} from '../../Navigator';

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
            onChangeText={setTodo}
            style={styles.textInput}
          />
          <View style={styles.btnContainer}>
            <Button title="Create" color="#FFFFFF" onPress={onPressCreate} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddTodoScreen;
