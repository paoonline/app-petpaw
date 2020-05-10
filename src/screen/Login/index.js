import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  PaddingLR,
  HeaderText,
  MarginTop,
  bottomMargin,
  FlexRow,
  MarginLeft,
  FlexDiretcRow,
  ButtonSubmit,
  styleScollViewGlow,
} from '../../components';
import {ROUTE_SCREEN} from '../../constant';

export const Login = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const LogoutHandler = () => {
    props.navigation.navigate(ROUTE_SCREEN.MAIN_LAYOUT);
    AsyncStorage.setItem('accessToken', 'true');
  };

  return (
    <>
      <PaddingLR>
        <HeaderText>Welcome back!</HeaderText>
        <Text>Log back into you account</Text>
      </PaddingLR>
      <ScrollView contentContainerStyle={styleScollViewGlow}>
        <PaddingLR>
          <MarginTop px={'60'}>
            <TextInput
              placeholder="You Email"
              placeholderTextColor="#000000"
              style={bottomMargin}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#000000"
              style={bottomMargin}
            />
          </MarginTop>
          <FlexRow>
            <FlexDiretcRow>
              <View>
                <Switch
                  trackColor={{false: '#767577', true: '#FED271'}}
                  thumbColor={'white'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <MarginLeft>
                <Text>Remember</Text>
              </MarginLeft>
            </FlexDiretcRow>
            <TouchableOpacity>
              <Text>Forgot?</Text>
            </TouchableOpacity>
          </FlexRow>
          <MarginTop px={'20'}>
            <ButtonSubmit
              text="Log in"
              onPress={() => LogoutHandler()}
              set={18}
            />
          </MarginTop>
        </PaddingLR>
      </ScrollView>
    </>
  );
};
