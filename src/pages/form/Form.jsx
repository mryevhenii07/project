import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import React from "react";
import TextField from "@material-ui/core/TextField";

// import { withStyles } from '@material-ui/core';

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { createUser, fetchPosition, fetchToken } from "../../api/Api";

import { addUser } from "../../store/userSlice/userSlice";

import s from "./Form.module.scss";

// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: '#b4b4b4',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'yellow',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'b4b4b4',
//       },
//       '&:hover fieldset': {
//         borderColor: '#D0CFCF',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'yellow',
//       },
//     },
//   },
// })(TextField);

const Form = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
  // const [user, setUser] = useState("");
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPosition().then(setPositions);
    fetchToken().then(setToken);
  }, []);

  console.log(token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = ({ email, yourName, position_id, photo, phone }) => {
    // { email, yourName, position_id, photo: photo[0].name, token },
    // dispatch(
    //   addUser({
    //     email,
    //     phone,
    //     yourName,
    //     position_id,
    //     photo: photo[0].name,
    //     token,
    //   }),
    // );
    console.log(email, yourName, position_id, photo, phone);
  };

  return (
    <div className={s.wrapForm}>
      <h1 className={s.formMainTitle}>Working with POST request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="" className={s.formLabel}>
          <TextField
            className={s.formInputYourName}
            {...register("yourName", {
              required: "Required field",
              minLength: { value: 2, message: "Minimum 2 characters" },
              maxLength: { value: 60, message: "Maximum 60 characters" },
            })}
            id="outlined-text-input"
            label="Your name"
            autoComplete="current-text"
            variant="outlined"
          />
          <div className={s.wrapError}>
            {errors?.yourName && (
              <p className={s.error}>{errors?.yourName?.message || "Error!"}</p>
            )}
          </div>
        </label>

        <label htmlFor="" className={s.formLabel}>
          <TextField
            className={s.formInputEmail}
            type="email"
            {...register("email", {
              required: "Required field",
              minLength: { value: 7, message: " Minimum 7 characters" },
              maxLength: { value: 26, message: "Maximum 26 characters" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            id="outlined-email-input"
            label="Email"
            autoComplete="current-email"
            variant="outlined"
          />
          <div className={s.wrapError}>
            {errors?.email && (
              <p className={s.error}>{errors?.email?.message || "errors"}</p>
            )}
          </div>
        </label>
        <label htmlFor="" className={s.formLabel}>
          <TextField
            // color={isValid ? 'secondary' : 'primary'}
            className={s.formInputPhone}
            type="phone"
            {...register("phone", {
              required: "Required field",
              pattern: {
                value: /^[+]{0,1}380[0-9]{9}$/i,
                message: "+38 (XXX) XXX-XX-XX",
              },
            })}
            id="outlined-phone-input"
            label="Phone"
            autoComplete="current-phone"
            variant="outlined"
          />
          <div className={s.wrapError}>
            {/* +38 (XXX)XXX-XX-XX */}
            {/* {errors?.phone && <p className={s.error}>{errors?.phone?.message || 'Error!'}</p>} */}
            {errors?.phone ? (
              <p className={s.error}>{errors?.phone?.message || "Error!"}</p>
            ) : (
              <p className={s.noError}>+38 (XXX) XXX-XX-XX</p>
            )}
          </div>
        </label>
        <p className={s.selectPosition}>Select your position</p>

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          {positions.map(({ id, name }) => {
            return (
              <FormControlLabel
                {...register("position", { required: "Required field" })}
                key={id}
                className={s.formRadio}
                value={name}
                control={<Radio color="secondary" />}
                label={name}
              />
            );
          })}
        </RadioGroup>

        <div className={s.wrapBtnTextarea}>
          <button className={s.formBtn}>Upload</button>
          <input
            type="file"
            {...register("photo", { required: "Required field" })}
            className={s.formTextarea}
            placeholder="Upload your photo"
          ></input>
        </div>
        <div className={s.wrapFormSubmit}>
          <button
            type="submit"
            className={isValid ? `${s.actFormSubmit}` : `${s.formSubmit}`}
            disabled={!isValid}
          >
            Sing up
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Form;
