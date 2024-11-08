import { List, ListItem } from "@mui/material";
import React from "react";

import { useAppSelector } from "../app/hooks";

function ContactList({ fallback }: { fallback?: React.ReactNode }) {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return contacts.length === 0 ? (
    <React.Fragment>{fallback}</React.Fragment>
  ) : (
    <List sx={{ flexGrow: 1 }}>
      {contacts.map((contact) => (
        <ListItem key={contact}>{contact}</ListItem>
      ))}
    </List>
  );
}

export default ContactList;
