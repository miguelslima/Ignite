import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box>
        <Text>Miguel Lima</Text>
        <Text color="gray.300" fontSize="small">
          miguelsousalima@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Miguel Lima"
        src="https://github.com/miguelslima.png"
      />
    </Flex>
  );
}
