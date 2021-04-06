import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Miguel Lima</Text>
          <Text color="gray.300" fontSize="small">
            miguelsousalima@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Miguel Lima"
        src="https://github.com/miguelslima.png"
      />
    </Flex>
  );
}
