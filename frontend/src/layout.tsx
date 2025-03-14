import { Box, Stack } from "@mui/material";
import Navbar from "./components/nabvar";
import Footer from "./components/footer";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display={"flex"} flexGrow={1} flexDirection={"column"}>
      <Navbar />

      <Stack height={"100%"}>{children}</Stack>

      <Footer />
    </Box>
  );
};

export default Layout;
