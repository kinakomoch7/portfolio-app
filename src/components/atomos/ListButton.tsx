import { Button } from "@mui/material";

type props = {
  message: String;
};

export const ListButton = (props: props) => {
  const { message } = props;
  return (
    <div className="text-center">
      <Button color="inherit">{message}</Button>
    </div>
  );
};
