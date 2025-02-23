import { Box, HStack, Text, Badge, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { QuantityPriceContext } from "../context/cartContext";

const CartSummary = () => {
  const { price, quantity } = useContext(QuantityPriceContext);
  return (
    <Box
      bg="blue.600"
      color="white"
      py={2}
      px={6}
      borderTopRadius="2xl"
      textAlign="center"
    >
      <Flex justify="space-between" align="center">
        <HStack gap={2}>
          <Badge bg="white" color="blue.600" borderRadius="full" px={2}>
            {quantity}
          </Badge>
          <Text>View cart</Text>
        </HStack>
        <Text>AED {price}</Text>
      </Flex>
      <Text fontSize="sm" mt={2} color="whiteAlpha.900">
        Prices are in AED and are inclusive of 10% service charges, 5% VAT & 7%
        Municipality fee.
      </Text>
    </Box>
  );
};

export default CartSummary;
