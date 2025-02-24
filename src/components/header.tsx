import {
  Badge,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaHome, FaSearch, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QuantityPriceContext } from "../context/cartContext";
import handleWhatsappClick from "../utils/whatsappLink";
import SearchDialog from "./searchDialog";

interface IProp {
  isMobile: boolean;
}

const Header = ({ isMobile }: IProp) => {
  const navigate = useNavigate();
  const { quantity } = useContext(QuantityPriceContext);
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        as="header"
        justifyContent="space-between"
        p={3}
        bg="blue.500"
        color="white"
      >
        {!isMobile && (
          <HStack>
            <IconButton
              onClick={() => navigate("/")}
              aria-label="Home"
              variant="ghost"
              color="white"
            >
              <FaHome />
            </IconButton>
            <IconButton
              aria-label="Search"
              variant="ghost"
              color="white"
              onClick={onOpen}
            >
              <FaSearch />
            </IconButton>
            <IconButton
              aria-label="Contact"
              variant="ghost"
              color="white"
              onClick={handleWhatsappClick}
            >
              <FaWhatsapp />
            </IconButton>
          </HStack>
        )}
        <Text fontSize="lg" fontWeight="bold">
          In Room Dining
        </Text>
        <IconButton
          aria-label="Cart"
          variant="ghost"
          color="white"
          position="relative"
          disabled
        >
          <FaShoppingCart />
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            bg="red.500"
            color="white"
            borderRadius="full"
            fontSize="xs"
            px={2}
          >
            {quantity ?? 0}
          </Badge>
        </IconButton>
      </HStack>
      <SearchDialog onClose={onClose} open={open} />
    </>
  );
};

export default Header;
