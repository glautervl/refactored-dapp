import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import Logo from "../../../assets/images/LoginLogo.png";

const useStyles = theme => ({
  loginHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "100%",
    maxWidth: "71%",
    margin: "0 auto",
    padding: "30px 0",
    "& h1": {
      margin: 0
    },
    "& p": {
      margin: 0,
      color: theme.palette.text.secondary,
      fontSize: "16px"
    },
    "& a": {
      display: "inline-block",
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontweight,
      textDecoration: "none"
    },
    "@media (max-width:750px)": {
      width: "75%"
    }
  },
  loginHeaderLink: {
    textAlign: "right",
    "& a": {
      "&:hover": {
        textDecoration: "underline"
      }
    },
    "@media (max-width:750px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      textAlign: "left"
    }
  }
});

const LoginOnboardingHeader = ({
  classes,
  title,
  linkText,
  linkPath,
  linkClick
}) => {
  return (
    <Grid container spacing={24}>
      <Grid container spacing={24} className={classes.loginHeader}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <h1>
            <a href="#" title="SingularityNET">
              <img src={Logo} alt="SingularityNET" />
            </a>
          </h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          className={classes.loginHeaderLink}
        >
          <p>
            {title}{" "}
            <Link to={linkPath} onClick={linkClick}>
              {linkText}
            </Link>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(LoginOnboardingHeader);
