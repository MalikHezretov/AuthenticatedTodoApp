import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CircleAddButton from '../../components/button';
import {RouteNameEnum} from '../../Navigator';
import {NavStackParamList} from '../../Navigator/screenParams';
import styles from './styles';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/store';

const HomeScreen = (): JSX.Element => {
  const todoList = useSelector((state: StoreState) => state);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<NavStackParamList, RouteNameEnum.Home>
    >();
  const onPressAdd = () => navigation.navigate(RouteNameEnum.AddTodo);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyle}>My Todos</Text>
      <View style={styles.listContainer} />
      <View style={styles.addButtonContainerStyle}>
        <CircleAddButton onPressAddButton={onPressAdd} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
