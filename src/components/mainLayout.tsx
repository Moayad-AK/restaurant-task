import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "./header";
import Bottom from "./bottom";
import { Outlet, useLocation } from "react-router-dom";
import CartSummary from "./cartSummary";

const MainLayout = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();
  const isItemsPage = location.pathname.includes("items");

  return (
    <>
      <Header isMobile={isMobile as boolean} />
      <Outlet />
      <Box position="fixed" bottom={0} left={0} right={0}>
        {isItemsPage && <CartSummary />}
        {isMobile && <Bottom />}
      </Box>
    </>
  );
};

export default MainLayout;
