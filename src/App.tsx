import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import API from "./API";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", { email, password });
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      localStorage.setItem("accessToken", accessToken);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await API.get("ping");
      console.log(response);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit}>
        <TextField name="email" type="email" value={email} onChange={handleChange} />
        <TextField name="password" type="password" value={password} onChange={handleChange} />
        <Button type="submit">로그인</Button>
      </form>
      <Button variant="contained" color="primary" onClick={handleClick}>
        hello
      </Button>
    </Box>
  );
}

export default App;
