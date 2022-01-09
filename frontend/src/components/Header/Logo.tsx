import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl', '4xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashGo
      <Text as="span" color="pink.500" fontSize="6xl">
        .
      </Text>
    </Text>
  );
}
