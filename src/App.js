import React from "react";
import { useState } from "react"
import "./App.css"
import ColorPanel from "./components/ColorPanel"
import ControlColorPanel from "./components/ControlColorPanel"
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Button } from "@mui/material"; 

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(errors)
  // console.log(register, "yyy"); // watch input value by passing the name of it

  return ( 
    <div className="App">
      <ColorPanel className="colorPanel"/>
      <ControlColorPanel className="controlColorPanel"/>



      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6">
          React Hook Form
        </Typography>
        <Grid container spacing={2} alignItems="flex-start" ml={3}>
          <Grid item xs={12}>
            <TextField 
              id="standard-name" 
              label="Имя" 
              variant="standard"
              helperText={errors.firstName?.message}
              error={!!errors?.firstName}
              {...register("firstName", { required: "Поле обязательно", maxLength: {value: 10, message: "Максимальная длина 10"}})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-surname" 
              label="Фамилия" 
              variant="standard"
              helperText={errors.lastName?.message}
              error={!!errors?.lastName}
              {...register("lastName", { 
                required: "Поле обязательно", 
                maxLength: {
                  value: 10, 
                  message: "Максимальная длина 10"}
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="standard-email" 
              label="Email" 
              variant="standard"
              helperText={errors.email?.message}
              error={!!errors?.email}

              {...register("email", { 
                required: "Поле обязательно",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный Email адрес"
                }

                
                })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Отправить</Button>
          </Grid>
        </Grid>
      </form>

    </div>);
}