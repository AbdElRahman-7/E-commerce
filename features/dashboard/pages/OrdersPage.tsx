import { Box } from "@mui/material";
import StatsCard from "../components/stats-card";
import { dashboardStats } from "../constants/dashboard-stats";
import SalesChart from "../components/sales-chart";
import DealsTable from "../../../shared/components/table/deals-table";

const OrdersPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {dashboardStats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            growth={item.growth}
            description={item.description}
            isPositive={item.isPositive}
            icon={<item.icon size={20} />}
          />
        ))}
      </Box>
      <Box>
        <SalesChart />
      </Box>
      <Box>
        <DealsTable />
      </Box>
    </>
  );
};

export default OrdersPage;
