import * as React from 'react';
import {
  ChakraBaseProvider,
  theme as ChakraTheme,
  extendBaseTheme,
} from '@chakra-ui/react';
import { ChakraProviderProps } from './types';

const { Button } = ChakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export function ChakraProvider(props: ChakraProviderProps) {
  return (
    <ChakraBaseProvider theme={theme}>{props.children}</ChakraBaseProvider>
  );
}
