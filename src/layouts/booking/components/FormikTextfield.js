/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Field } from "formik";

export default function FormikTextfield({ name, label, ...rest }) {
  return (
    <Field name={name}>
      {(props) => {
        const { field, meta } = props;

        return (
          <TextField
            margin="normal"
            size="small"
            fullWidth
            id={name}
            label={label}
            {...rest}
            error={meta.touched && meta.error ? true : false}
            helperText={meta.touched && meta.error ? meta.error : ""}
            {...field}
          />
        );
      }}
    </Field>
  );
}
