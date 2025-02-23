import {
  Box,
  Grid,
  Image,
  Text,
  HStack,
  Button,
  Flex,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import useFetchItems from "../hooks/useFetchItems";
import LoadingState from "../components/DataState/LoadingState";
import ErrorState from "../components/DataState/ErrorState";
import { useState } from "react";
import ItemDetailDialog from "../components/itemDetailDialog";
import { Item } from "../types/items";
import { useParams } from "react-router-dom";
import MyEmptyState from "../components/DataState/EmptyState";

const ItemsListPage = () => {
  const { id } = useParams();
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Item>();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFetchItems(Number(id));

  const items = data?.pages.flatMap((page) => page.data.items.data) ?? [];

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    onOpen();
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (items.length === 0) {
    return <MyEmptyState />;
  }

  return (
    <Box mb={20}>
      {/* Items List */}
      <Box p={5}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr", lg: "repeat(2, 1fr)" }}
          gap={4}
          mb={{ base: 14, lg: 0 }}
        >
          {items.map((item) => (
            <Flex
              key={item.id}
              p={2}
              borderWidth={1}
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
              }}
              cursor={"pointer"}
              borderRadius="md"
              boxShadow="md"
              align="center"
              width="100%"
              onClick={() => handleItemClick(item)}
            >
              <Image
                src={item.image}
                alt={item.name}
                style={{ userSelect: "none", pointerEvents: "none" }}
                borderRadius="md"
                w={"30%"}
                h={"100%"}
                mr={4}
              />
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-between"}
                boxSize={"100%"}
                p={1}
              >
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {item?.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {item?.description}
                  </Text>
                </Box>
                <HStack display={"flex"} justifyContent="space-between" mt={2}>
                  <Text fontWeight="bold">AED {item.price}</Text>
                  <Button colorScheme="blue">Add to Cart</Button>
                </HStack>
              </Box>
            </Flex>
          ))}
        </Grid>

        {/* Load More Button */}
        {hasNextPage && (
          <Button
            mt={4}
            mb={{ base: 14, md: 1 }}
            colorScheme="blue"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            width="full"
          >
            {isFetchingNextPage ? <Spinner size="sm" /> : "Load More"}
          </Button>
        )}
      </Box>
      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailDialog open={open} onClose={onClose} item={selectedItem} />
      )}
    </Box>
  );
};

export default ItemsListPage;
