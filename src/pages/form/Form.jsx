import { useState } from "react";
import { useForm } from "react-hook-form";

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import s from "./Form.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = () => {
  const [value, setValue] = useState("female");
  const [data, setData] = useState("");

  const classes = useStyles();

  const { register, handleSubmit } = useForm([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => setData(data);

  console.log(data);

  return (
    <div className={s.wrapForm}>
      <h1 className={s.formMainTitle}>Working with POST request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField
          className={s.formInputYourName}
          {...register("Your name", { required: true, maxLength: 20 })}
          id="outlined-text-input"
          label="Your name"
          autoComplete="current-text"
          variant="outlined"
        />

        <TextField
          className={s.formInputEmail}
          type="email"
          {...register("Email")}
          id="outlined-email-input"
          label="Email"
          autoComplete="current-email"
          variant="outlined"
        />
        <TextField
          className={s.formInputPhone}
          type="phone"
          {...register("Phone")}
          id="outlined-phone-input"
          label="Phone"
          autoComplete="current-phone"
          variant="outlined"
        />
        <p className={s.selectPosition}>Select your position</p>
        {/* <FormControl component="fieldset"> */}

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            {...register("Frontend developer")}
            value="Frontend developer"
            control={<Radio />}
            label="Frontend developer"
          />
          <FormControlLabel
            {...register("Backend developer")}
            value="Backend developer"
            control={<Radio />}
            label="Backend developer"
          />
          <FormControlLabel
            value="Designer"
            control={<Radio />}
            label="Designer"
            {...register("Designer")}
          />
          <FormControlLabel
            value="QA"
            control={<Radio />}
            label="QA"
            {...register("QA")}
          />
        </RadioGroup>
        {/* </FormControl> */}
        <div className={s.wrapBtnTextarea}>
          <button className={s.formBtn}>sdds</button>
          <textarea
            // value="textarea"
            {...register("textarea")}
            className={s.formTextarea}
            placeholder="Upload your photo"
          >
            {" "}
          </textarea>
        </div>
        <div className={s.wrapFormSubmit}>
          {/* <input type="submit" className={s.formSubmit} /> */}
          <button type="submit" className={s.formSubmit}>
            Sing in
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Form;
