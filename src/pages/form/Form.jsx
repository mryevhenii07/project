import { useState } from "react";
import { useForm } from "react-hook-form";

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import s from "./Form.module.scss";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//       color: 'green',
//     },
//   },
// }));

const Form = () => {
  // const [isChack, setIsChack] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  //   const classes = useStyles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);
  const onSubmit = (data) => {
    setData(data);
    reset();
  };

  console.log(data);

  return (
    <div className={s.wrapForm}>
      <h1 className={s.formMainTitle}>Working with POST request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="" className={s.formLabel}>
          <TextField
            className={s.formInputYourName}
            {...register("yourName", {
              required: "Required field",
              //   minLength: { value: 3, message: 'Minimum 3 characters' },
              maxLength: { value: 10, message: "Maximum 10 characters" },
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
        <label htmlFor="">
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
              <p className={s.error}>{errors?.email?.message || "Error!"}</p>
            )}
          </div>
        </label>
        <label htmlFor="">
          <TextField
            className={s.formInputPhone}
            type="phone"
            {...register("phone")}
            id="outlined-phone-input"
            label="Phone"
            autoComplete="current-phone"
            variant="outlined"
          />
          <div className={s.wrapPhone}>
            +38 (XXX)XXX-XX-XX
            {/* {errors?.phone && <p className={s.error}>{errors?.phone?.message || 'Error!'}</p>} */}
          </div>
        </label>
        <p className={s.selectPosition}>Select your position</p>
        {/* <FormControl component="fieldset"> */}

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            className={s.formRadio}
            {...register("frontendDeveloper")}
            value="Frontend developer"
            control={<Radio color="primary" />}
            label="Frontend developer"
          />

          <FormControlLabel
            {...register("backendDeveloper")}
            value="Backend developer"
            control={<Radio color="primary" />}
            label="Backend developer"
          />
          <FormControlLabel
            value="Designer"
            control={<Radio color="primary" />}
            label="Designer"
            {...register("designer")}
          />
          <FormControlLabel
            value="QA"
            control={<Radio color="primary" />}
            label="QA"
            {...register("QA")}
          />
        </RadioGroup>
        {/* </FormControl> */}
        <div className={s.wrapBtnTextarea}>
          <button className={s.formBtn}>Upload</button>
          <textarea
            value="textarea"
            {...register("textarea")}
            className={s.formTextarea}
            placeholder="Upload your photo"
          ></textarea>
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
