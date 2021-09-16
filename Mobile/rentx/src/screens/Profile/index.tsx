import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/core';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useAuth } from '../../hooks/auth';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Option,
  Options,
  OptionTitle,
  Photo,
  PhotoButton,
  PhotoContainer,
  Section,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user?.avatar);
  const [name, setName] = useState(user?.name);
  const [driveLicense, setDriveLicense] = useState(user?.driver_license);

  function handleBack() {
    navigation.goBack();
  }

  async function handleSignOut() {}

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected);
  }

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    if (result.uri) {
      setAvatar(result.uri);
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}></LogoutButton>
              <Feather name='power' size={24} color={theme.colors.shape} />
            </HeaderTop>

            <PhotoContainer>
              {!!avatar && (
                <Photo
                  source={{
                    uri: avatar,
                  }}
                />
              )}
              <PhotoButton onPress={handleSelectAvatar}>
                <Feather name='camera' size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option active={option === 'passwordEdit'}>
                <OptionTitle
                  active={option === 'passwordEdit'}
                  onPress={() => handleOptionChange('passwordEdit')}
                >
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>

            {option === 'dataEdit' ? (
              <Section>
                <Input
                  iconName='user'
                  placeholder='Nome'
                  autoCorrect={false}
                  defaultValue={user.name}
                  onChangeText={setName}
                />
                <Input
                  iconName='mail'
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName='credit-card'
                  placeholder='CNH'
                  keyboardType='numeric'
                  defaultValue={user.driver_license}
                  onChangeText={setDriveLicense}
                />
              </Section>
            ) : (
              <Section>
                <PasswordInput iconName='lock' placeholder='Senha atual' />
                <PasswordInput iconName='lock' placeholder='Nova senha' />
                <PasswordInput
                  iconName='lock'
                  placeholder='Confirmar nova senha'
                />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
