import React from "react";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");
  const [isActive, setIsActive] = useState(false);

  const handleListItemClick = () => {
    setIsActive(true);
  };

  const renderRoutes = routes.map(
    ({ type, name, icon, title, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        returnValue = href ? (
          <Link href={href} key={key} target="_blank" rel="noreferrer">
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ) : (
          <NavLink key={key} to={route} sx={{}}>
            <ListItemButton
              selected={isActive || location.pathname === route}
              sx={{
                "&:hover": {
                  backgroundColor: color === "primary" ? "#121212" : "#e53935",
                },
                "&.Mui-selected": {
                  backgroundColor: color === "primary" ? "#121212" : "#121212",
                },

                borderRadius: 2,
                marginLeft: "5%",
                maxWidth: "90%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "none",

                // Ajusta el radio de borde según sea necesario
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: "white" }}>{name}</Typography>
                }
              />
            </ListItemButton>
          </NavLink>
        );
      } else if (type === "title") {
        returnValue = (
          <Typography
            key={key}
            color="white"
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </Typography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} light />;
      }

      return returnValue;
    }
  );

  return (
    <Box
      position={"fixed"}
      width={"250px"}
      top={10}
      marginLeft={"0"}
      left={14}
      bottom={10}
      bgcolor="#c62828"
      borderRadius={4}
      sx={{
        marginRight:'200'

      }}
    >
      <Box
        borderRadius={4}
        pt={3}
        pb={1}
        px={4}
        textAlign="center"
        sx={{ backgroundColor: "#b71c1c", borderBottomRightRadius:'0',borderBottomLeftRadius:'0' }}
      >
        <Box
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          sx={{ cursor: "pointer" }}
        ></Box>
        <Box component={NavLink} to="/" display="flex" alignItems="center">
          {brand && (
            <Box component="img" src={brand} alt="Brand" width="6rem" />
          )}
          <Box width={!brandName && "100%"}>
            <Typography
              color="white"
              component="h5"
              variant="button"
              fontWeight="medium"
            >
              {brandName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>{renderRoutes}</List>
      <Box p={2} mt="75%">
        <Button
          component="a"
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color={color}
          fullWidth
          sx={{
            color: "white",
            borderRadius: "10px",
            backgroundColor: "#28c6c6",
          }}
        >
          upgrade to pro
        </Button>
      </Box>
    </Box>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
