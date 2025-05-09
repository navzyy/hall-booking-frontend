import React, { useState } from "react";
import { Box, Button, Grid, Snackbar, Typography, Alert, AlertTitle } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MDButton from "components/MDButton";
import FormikTextfield from "./components/FormikTextfield";
// import FormikDatePicker from "./components/FormikDatePicker";
// import FormikSelect from "./components/FormikSelect";

const timeSlots = ["8:00 - 10:00 AM", "10:00 - 12:00 PM", "2:00 - 4:00 PM", "4:00 - 6:00 PM"];

export default function BookingForm() {
  const [openAlert, setOpenAlert] = useState(false);

  const initialValues = {
    name: "",
    registrationNo: "",
    societyName: "",
    purpose: "",
    date: null,
    timeSlot: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    registrationNo: Yup.string().required("Required"),
    societyName: Yup.string().required("Required"),
    purpose: Yup.string().required("Required"),
    date: Yup.date().nullable().required("Required"),
    timeSlot: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Booking Data:", values);
    setOpenAlert(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Hall Booking Form
      </Typography>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormikTextfield name="name" label="Name" required />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield name="registrationNo" label="Registration Number" required />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield name="societyName" label="Society Name" required />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield name="purpose" label="Purpose" multiline rows={3} required />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormikDatePicker name="date" label="Date" required />
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <FormikSelect name="timeSlot" label="Time Slot" options={timeSlots} required />
            </Grid> */}
          </Grid>

          <MDButton type="submit" color="info" fullWidth variant="contained" sx={{ mt: 3 }}>
            Submit Booking
          </MDButton>
        </Form>
      </Formik>

      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert severity="success" onClose={handleAlertClose}>
          <AlertTitle>Booking Submitted</AlertTitle>
          Your booking request has been received.
        </Alert>
      </Snackbar>
    </Box>
  );
}
