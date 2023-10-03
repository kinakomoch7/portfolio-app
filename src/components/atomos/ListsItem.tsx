import { ListItem, ListItemButton, ListItemText } from "@mui/material";

type props = {
  message: String;
};

export const ListsItem = (props: props) => {
  const { message } = props;
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText primary={message} />
      </ListItemButton>
    </ListItem>
  );
};
