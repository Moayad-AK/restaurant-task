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
          <EmptyState.Title>Your category is empty</EmptyState.Title>
          <EmptyState.Description>
            Chose another category you must not drink for your health
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};

export default MyEmptyState;
