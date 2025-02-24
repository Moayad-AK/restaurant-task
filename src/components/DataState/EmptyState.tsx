import { EmptyState, VStack } from "@chakra-ui/react";
import { PiEmptyBold } from "react-icons/pi";

const MyEmptyState = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <PiEmptyBold />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Empty</EmptyState.Title>
          <EmptyState.Description>The data is empty</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default MyEmptyState;
