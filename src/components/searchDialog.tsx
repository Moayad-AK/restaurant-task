import { useContext } from "react";
import { Button, Box, Flex, Input } from "@chakra-ui/react";
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
import { QuantityPriceContext } from "../context/cartContext";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const {} = useContext(QuantityPriceContext);

  return (
    <DialogRoot open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Box textAlign="center">
            <InputGroup flex="1" startElement={<LuSearch />}>
              <Input placeholder="Search..." />
            </InputGroup>
          </Box>
        </DialogBody>
        <DialogFooter>
          <Flex justifyContent="center" width="100%">
            <DialogActionTrigger asChild>
              <Button colorScheme="blue" onClick={onClose}>
                Search
              </Button>
            </DialogActionTrigger>
          </Flex>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default SearchDialog;
