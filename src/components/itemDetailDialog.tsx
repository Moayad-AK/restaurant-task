import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  Text,
  Box,
  VStack,
  Flex,
  Separator,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "./ui/dialog";
import { Item, Option } from "../types/items";
import { Checkbox } from "./ui/checkbox";
import { FaPlus, FaMinus } from "react-icons/fa";
import { QuantityPriceContext } from "../context/cartContext";

interface ItemDetailDialogProps {
  open: boolean;
  onClose: () => void;
  item: Item;
}

const ItemDetailDialog = ({ open, onClose, item }: ItemDetailDialogProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!open)
      setTimeout(() => {
        setQuantity(1);
      }, 500);
  }, [open]);

  const handleOptionToggle = (option: Option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((opt) => opt.id !== option.id)
        : [...prevOptions, option]
    );
  };

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice =
    item.price * quantity +
    selectedOptions.reduce((acc, option) => acc + option.price, 0);
  const {
    setPrice,
    setQuantity: setQty,
    price,
    quantity: totalQuantity,
  } = useContext(QuantityPriceContext);

  return (
    <DialogRoot open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.display_name || item.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Box textAlign="center">
            <Image
              src={item.image}
              alt={item.name}
              boxSize="75%"
              justifySelf={"center"}
              borderRadius="md"
              mb={4}
            />
            <Text fontSize="md" color="gray.500" mb={2}>
              {item.description}
            </Text>
            <HStack justifyContent={"space-between"} my={3}>
              <HStack justifyContent="center" alignItems="center" mb={2}>
                <IconButton
                  onClick={handleDecreaseQuantity}
                  size="xs"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </IconButton>
                <Text fontSize="lg" fontWeight="bold">
                  {quantity}
                </Text>
                <IconButton
                  onClick={handleIncreaseQuantity}
                  size="xs"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </IconButton>
              </HStack>
              <Text fontSize="lg" fontWeight="bold">
                Total: AED {totalPrice}
              </Text>
            </HStack>
          </Box>

          {/* Extra Options */}
          {item.extrasWithOptions.length > 0 && (
            <VStack align="start" mt={4} gap={3}>
              <Text fontSize="md" fontWeight="bold">
                Customize your item:
              </Text>
              {item?.extrasWithOptions?.map((extra) => (
                <React.Fragment key={extra?.extra_id}>
                  <Box borderEndColor={"white"}>
                    <HStack my={2}>
                      <Text fontSize="sm" fontWeight="bold">
                        {extra?.name}
                      </Text>
                      {extra?.is_required === 1 && <Text color={"red"}>*</Text>}
                    </HStack>
                    {extra?.option.map((option) => (
                      <Checkbox
                        key={option?.id}
                        m={2}
                        onChange={() => handleOptionToggle(option)}
                      >
                        {option?.name} (+AED {option?.price})
                      </Checkbox>
                    ))}
                  </Box>
                  <Separator variant="solid" width={"100%"} />
                </React.Fragment>
              ))}
            </VStack>
          )}
        </DialogBody>
        <DialogFooter>
          <Flex justifyContent="center" width="100%">
            <DialogActionTrigger asChild>
              <Button
                colorScheme="blue"
                onClick={() => {
                  setPrice(price + totalPrice);
                  setQty(totalQuantity + quantity);
                }}
              >
                Add to Cart
              </Button>
            </DialogActionTrigger>
          </Flex>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default ItemDetailDialog;
