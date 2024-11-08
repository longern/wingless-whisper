import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Fab,
  GlobalStyles,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import ContactList from "./components/ContactList";
import { Add } from "@mui/icons-material";

const theme = createTheme();

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Wingless Whisper</Typography>
      </Toolbar>
    </AppBar>
  );
}

const globalStyles = (
  <GlobalStyles
    styles={{ "html, body, #root": { height: "100%" }, body: { margin: 0 } }}
  />
);

function ContactListFallback() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle1" color="textSecondary">
        No contacts
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Stack height="100%">
        <Header />
        <ContactList fallback={<ContactListFallback />} />
        <Fab
          color="primary"
          sx={{ position: "absolute", right: 16, bottom: 16 }}
        >
          <Add fontSize="large" />
        </Fab>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
