import { TextFieldProps } from "@mui/material";

export const emailPropsList:TextFieldProps[] = [
  {
    margin: "normal",
    id: "name",
    label: "名前",
    name: "name",
    autoComplete: "off",
  },
  {
    margin: "normal",
    id: "email",
    label: "Email",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  {
    margin: "normal",
    id: "note",
    label: "内容",
    name: "name",
    autoComplete: "off",
  }
]