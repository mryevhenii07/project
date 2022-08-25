import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import React from "react";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { createUser, fetchPosition } from "../../api/Api";

import { addUser } from "../../store/userSlice/userSlice";

import s from "./Form.module.scss";

const Form = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  // const [user, setUser] = useState("");
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPosition().then(setPositions);
  }, []);

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

  const onSubmit = ({ email, phone, yourName }) => {
    createUser(
      dispatch(
        addUser({
          email,
          phone,
          yourName,
          position_id: value,
        })
      )
    );

    setData(data);
    // console.log(data);
    reset();
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
              <p className={s.error}>{errors?.email?.message || "secondary"}</p>
            )}
          </div>
        </label>
        <label htmlFor="" className={s.formLabel}>
          <TextField
            color={isValid ? "secondary" : "primary"}
            className={s.formInputPhone}
            type="phone"
            {...register("phone", {
              pattern: {
                value: /^[+]{0,1}38[0-9]{10}$/i,
                valid: "+38 (XXX) XXX-XX-44",
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
          {/* <Button variant="contained" component="label">
            Upload
            <input type="file" hidden />
          </Button> */}
          <input
            type="text"
            {...register("textarea")}
            className={s.formTextarea}
            placeholder="Upload your photo"
          ></input>
        </div>
        <div className={s.wrapFormSubmit}>
          <button type="submit" className={s.formSubmit} disabled={!isValid}>
            Sing in
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Form;
