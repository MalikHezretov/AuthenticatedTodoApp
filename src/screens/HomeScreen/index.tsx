import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CircleAddButton from '../../components/button';
import {RouteNameEnum} from '../../Navigator';
import {NavStackParamList} from '../../Navigator/screenParams';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {StoreDispatch, StoreState} from '../../redux/store';
import {TodoModel} from '../../models/todoModel';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {setCompletedStatus} from '../../redux/slice/todoSlice';

const HomeScreen = (): JSX.Element => {
  const todoList = useSelector((state: StoreState) => state);
  const dispatch = useDispatch<StoreDispatch>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<NavStackParamList, RouteNameEnum.Home>
    >();

  const onPressAdd = () => navigation.navigate(RouteNameEnum.AddTodo);

  const onPressCheckbox = (item: TodoModel) => {
    dispatch(
      setCompletedStatus({
        isCompleted: !item.isCompleted,
        todoId: item.todoId,
      }),
    );
  };

  const renderItem = ({item}: {item: TodoModel}) => {
    return (
      <View style={styles.todItemStyle}>
        <BouncyCheckbox
          size={25}
          fillColor="#0096FF"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#0096FF'}}
          innerIconStyle={{borderWidth: 2}}
          onPress={() => onPressCheckbox(item)}
        />
        <Text style={styles.todoTextStyle}>{item.todoDescription}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>My Todos</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={todoList}
            renderItem={renderItem}
            keyExtractor={item => item.todoId}
            extraData={todoList}
            showsVerticalScrollIndicator={false}
            style={styles.todoFlatListStyle}
          />
        </View>
        <View style={styles.addButtonContainerStyle}>
          <CircleAddButton onPressAddButton={onPressAdd} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
