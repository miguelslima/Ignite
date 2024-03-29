import React from 'react';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Container, Name } from './styles';

interface AcessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Acessory({ name, icon: Icon }: AcessoryProps) {
  const theme = useTheme();

  return (
    <Container>
      <Icon width={32} height={32} fill={theme.colors.header} />
      <Name>{name}</Name>
    </Container>
  );
}
