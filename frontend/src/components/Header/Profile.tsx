import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  // eslint-disable-next-line react/require-default-props
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wallace Ferreira</Text>
          <Text color="gray.500" fontSize="small">
            wallaceferreira149@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Wallace Ferreira"
        src="https://github.com/wallaceferreira149.png"
      />
    </Flex>
  );
}
