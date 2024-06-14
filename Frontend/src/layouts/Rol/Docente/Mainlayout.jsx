import { Box } from "@mui/material";
import PrimarySearchAppBar from "../../../components/appbar/appbar";
import Sidenav from "../../../components/sideNav/side";
import routes from "../../../routes";
import Grid from '@mui/material/Unstable_Grid2';
import { red } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export const MainLayout = ({ children }) => {
  return (
    <Grid  container padding={0} margin={0}  width={"100%"}>
      <Grid md={2.5}>
          <Sidenav brandName="ZOAR" brand={"./logo.ico"} routes={routes} />

     
      </Grid>
      <Grid  md={9.5}>
        <Box >
          <PrimarySearchAppBar />
          <Grid2  sx={{ width:'100%', height:'100%'}} >
          {children}
          </Grid2>
        </Box>
      </Grid>
    </Grid>
  );
};
