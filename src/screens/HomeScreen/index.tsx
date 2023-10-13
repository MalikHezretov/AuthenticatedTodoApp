import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CircleAddButton from '../../components/button';
import {RouteNameEnum} from '../../Navigator';
import {NavStackParamList} from '../../Navigator/screenParams';

const HomeScreen = (): JSX.Element => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    paddingHorizontal: 24,
    fontSize: 28,
  },
  listContainer: {
    flex: 1,
    padding: 24,
  },
  buttonStyle: {
    width: 100,
    height: 100,
    backgroundColor: '#90EE90',
    borderRadius: 50,
    alignSelf: 'center',
  },
  todoLabelStyle: {
    fontSize: 18,
  },
  addButtonContainerStyle: {
    alignItems: 'center',
  },
});

export default HomeScreen;
