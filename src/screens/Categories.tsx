import React from "react";
import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";
import useFetchCategories from "../hooks/useFetchCategories";
import LoadingState from "../components/DataState/LoadingState";
import ErrorState from "../components/DataState/ErrorState";
import { useNavigate } from "react-router-dom";

const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchCategories();
  const categories = data?.data.categories ?? [];
  console.log("string", data);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  return (
    <Box mb={14}>
      {/* Category Grid */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        p={4}
      >
        {categories?.map((category) => {
          if (category?.name !== "ALCOHOL") {
            return (
              <VStack
                key={category.id}
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
                }}
                onClick={() => navigate(`/items/${category.id}`)}
                cursor={"pointer"}
              >
                <Image
                  src={category?.image}
                  // alt={category?.display_name}
                  borderRadius="md"
                  w={"100%"}
                  h={"100%"}
                  style={{ userSelect: "none", pointerEvents: "none" }}
                />
                <Text fontWeight="bold">{category?.display_name}</Text>
                {category?.opens_at && (
                  <Text fontSize="sm" color="gray.500">
                    Opens at {category?.opens_at}
                  </Text>
                )}
              </VStack>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default CategoriesPage;
