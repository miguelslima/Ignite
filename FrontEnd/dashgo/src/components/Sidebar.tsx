import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="blue.400">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text>Dashborad</Text>
            </Link>
            <Link display="flex" alignItems="center" color="blue.400">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text>Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="blue.400">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text>Formulários</Text>
            </Link>
            <Link display="flex" alignItems="center" color="blue.400">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text>Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
