import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Photo,
  PhotoContainer,
} from './styles';
import { BackButton } from '../../components/BackButton';

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleSignOut() {}

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSignOut}></LogoutButton>
          <Feather name='power' size={24} color={theme.colors.shape} />
        </HeaderTop>

        <PhotoContainer>
          <Photo
            source={{
              uri: 'https://avatars.githubusercontent.com/u/50017221?v=4',
            }}
          />
        </PhotoContainer>
      </Header>
    </Container>
  );
}
