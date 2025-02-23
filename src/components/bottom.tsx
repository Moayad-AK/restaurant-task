import { HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaSearch, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Bottom = () => {
  const navigate = useNavigate();
  return (
    <HStack
      as="footer"
      bg="blue.500"
      p={2}
      justifyContent="space-around"
      color="white"
    >
      <IconButton
        onClick={() => navigate("/")}
        aria-label="Home"
        variant="ghost"
        color="white"
      >
        <FaHome />
      </IconButton>
      <IconButton aria-label="Search" variant="ghost" color="white">
        <FaSearch />
      </IconButton>
      <IconButton aria-label="Contact" variant="ghost" color="white">
        <FaWhatsapp />
      </IconButton>
    </HStack>
  );
};

export default Bottom;
