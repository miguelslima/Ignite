import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function ConfirmButton({ title, onPress }: ConfirmButtonProps) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
