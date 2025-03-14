import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        p: 2,
        position: "static",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">Footer</Typography>
    </Box>
  );
};

export default Footer;
