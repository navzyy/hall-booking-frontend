// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function ComplexStatisticsCard({ color, title, capacity, icon }) {
  const handleBookNow = async (hall) => {
    try {
      // const response = await axios.post("http://localhost:8080/api/halls/book", {
      //   hallName: hall.name,
      //   capacity: hall.capacity,
      // });
      // console.log("Booking success:", response.data);
    } catch (error) {
      // console.error("Booking failed:", error);
    }
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          textAlign="right"
          lineHeight={1.5}
          p={2}
          borderRadius="md"
          boxShadow="md"
        >
          <MDTypography variant="button" fontWeight="light" color="text">
            Hall Name:{" "}
            <MDTypography variant="h6" display="inline">
              {title}
            </MDTypography>
          </MDTypography>

          <MDTypography variant="button" fontWeight="light" color="text" mt={1}>
            Capacity:{" "}
            <MDTypography variant="h6" display="inline">
              {capacity}
            </MDTypography>
          </MDTypography>

          <MDBox mt={2}>
            <MDButton color={color} size="small">
              Book Now
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
