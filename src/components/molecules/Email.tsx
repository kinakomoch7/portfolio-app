import { Box, Container, TextField } from "@mui/material"
import { NButton } from "../atomos/NButton"
import { emailPropsList } from "../../constants/emailPropsList"


export const Email = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
  }

  return (
    <Container maxWidth="md" >
      <Box
        component='form'
        noValidate
        sx={{ display: "flex", flexDirection:"column", justifyItems:"center" }}
        onSubmit={handleSubmit}
      >
        {emailPropsList.map((props, index) => (
          <TextField key={index} {...props} required autoFocus/>
        ))}
        <NButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>送信</NButton>
      </Box>
    </Container>
  )
}
