// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Dashboard() {
  const { bookings } = reportsLineChartData;

  const halls = [
    { id: 1, name: "NFC 1", capacity: 200, color: "dark" },
    { id: 2, name: "NFC 2", capacity: 250, color: "success" },
    { id: 3, name: "NFC 3", capacity: 281, color: "info" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {halls.map((hall) => (
            <Grid item xs={12} md={6} lg={3} key={hall.id}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color={hall.color}
                  icon="store"
                  title={hall.name}
                  capacity={hall.capacity}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
        <MDBox mt={4.5}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="dark"
                title="Bookings"
                description="Hall bookings with time"
                date="just updated"
                chart={bookings}
              />
            </MDBox>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
