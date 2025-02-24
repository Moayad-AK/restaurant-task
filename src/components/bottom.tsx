import { HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaHome, FaSearch, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import handleWhatsappClick from "../utils/whatsappLink";
import SearchDialog from "./searchDialog";

const Bottom = () => {
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();
  // const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
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
      <SearchDialog onClose={onClose} open={open} />
    </>
  );
};

export default Bottom;
