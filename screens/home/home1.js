import * as React from 'react';
import { Text, View, Button } from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import { Grid, Row, Col } from "react-native-easy-grid";

export default HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ backgroundColor: '#ffffff', height: '100%' }}>
      <Grid>
        <Row></Row>
        <Row>
          <Col size={25}></Col>
          <Col size={50}>
            <Text style={{
              textAlign: 'center'
            }}>Signed homescreen in!</Text>
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
              }}
            />
          </Col>
          <Col size={25}></Col>
        </Row>

        <Row></Row>
      </Grid>

    </View>
  );
}