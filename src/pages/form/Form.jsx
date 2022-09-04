import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { createUser, fetchPosition, fetchToken } from "../../api/Api";
import s from "./Form.module.scss";
import { IsNav } from "../../App";

const Form = () => {
  const [value, setValue] = useState("");
  const [token, setToken] = useState("");
  const { setIsNav } = useContext(IsNav);

  const { push } = useHistory();

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetchPosition().then(setPositions);
    fetchToken().then(setToken);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const onSubmit = ({ email, name, position_id, photo, phone }) => {
    const formData = new FormData();
    formData.set("email", email);
    formData.set("name", name);
    formData.set("phone", phone);
    formData.set("position_id", position_id);
    formData.set("photo", photo[0]);

    createUser(token, formData);
    push("/success");
    setIsNav(false);

    reset();
  };

  return (
    <div className={s.wrapForm}>
      <h1 className={s.formMainTitle}>Working with POST request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="" className={s.formLabel}>
          <TextField
            className={s.formInputYourName}
            {...register("name", {
              required: "Required field",
              minLength: { value: 2, message: "Minimum 2 characters" },
              maxLength: { value: 60, message: "Maximum 60 characters" },
            })}
            error={!!errors.name?.message}
            id="outlined-text-input"
            label="Your name"
            autoComplete="current-text"
            variant="outlined"
          />
          <div className={s.wrapError}>
            {errors?.name && (
              <p className={s.error}>{errors?.name?.message || "Error!"}</p>
            )}
          </div>
        </label>

        <label htmlFor="" className={s.formLabel}>
          <TextField
            className={s.formInputEmail}
            type="email"
            {...register("email", {
              required: "Required field",
              pattern: {
                value:
                  // eslint-disable-next-line no-control-regex
                  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email?.message}
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
            className={s.formInputPhone}
            error={!!errors.phone?.message}
            type="number"
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
                {...register("position_id", { required: "Required field" })}
                key={id}
                className={s.formRadio}
                value={id}
                control={<Radio color="secondary" />}
                label={name}
              />
            );
          })}
        </RadioGroup>

        <div className={s.wrapBtnPhoto}>
          <Button variant="contained" component="label" className={s.upload}>
            Upload
            <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              errors={errors}
              type="file"
              {...register("photo", {
                required: "Required field",
                validate: {
                  lessThan5MB: (files) => files[0]?.size < 5000000 || "Max 5MB",
                  acceptedFormats: (files) =>
                    ["image/jpeg", "image/jpg"].includes(files[0]?.type) ||
                    "Invalid img , you need select jpeg or jpg",
                },
              })}
              hidden
            />
          </Button>
          <div className={s.uploadPhoto}>Upload your photo</div>
        </div>

        <div
          style={{
            fontSize: "12px",
            height: "15px",
            color: "red",
            paddingLeft: "10px",
          }}
        >
          {errors?.photo && (
            <p className={s.error}>{errors?.photo?.message || "errors"}</p>
          )}
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
