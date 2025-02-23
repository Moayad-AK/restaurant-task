import React from "react";
import { Box, Text, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgGradient="linear(to-r, teal.500, teal.700)"
      color="white"
    >
      <VStack gap={4}>
        <Heading as="h1" size="2xl">
          404
        </Heading>
        <Text fontSize="xl">
          Oops! The page you're looking for does not exist.
        </Text>
        <Button onClick={() => navigate("/")} colorScheme="teal" size="lg">
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
