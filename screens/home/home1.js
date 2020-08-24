import * as React from 'react';
import { Text, View, Button } from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

export default HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Signed homescreen in!</Text>
      <Button
        title="Logout"
        color={Colors.primary}
        onPress={() => {
          dispatch(authActions.logout());
        }}
      />
    </View>
  );
}