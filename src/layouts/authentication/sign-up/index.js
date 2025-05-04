// react-router-dom components
import { Link } from "react-router-dom";

import * as Yup from "yup";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { ErrorMessage, Field, Form, Formik } from "formik";

function Cover() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("first");
    console.log("Form data", values);

    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const params = {};

    // try {
    //   const response = await sendRegistrationDetails(params, body);
    //   console.log(response);
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography display="block" variant="h4" color="white" my={1} fontWeight="bold">
            Sign up
          </MDTypography>
        </MDBox>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox>
                  <MDBox mb={2}>
                    <Field
                      name="name"
                      as={MDInput}
                      type="text"
                      label="Name"
                      variant="standard"
                      fullWidth
                      error={touched.name && Boolean(errors.name)}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <Field
                      name="email"
                      as={MDInput}
                      type="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                      error={touched.email && Boolean(errors.email)}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <Field
                      name="password"
                      as={MDInput}
                      type="password"
                      label="Password"
                      variant="standard"
                      fullWidth
                      error={touched.password && Boolean(errors.password)}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red", fontSize: 12 }}
                    />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth type="submit">
                      Sign up
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign In
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Form>
          )}
        </Formik>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
