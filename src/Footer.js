import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import "./components/css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg" style={{ marginTop: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                ABOUT BLABLA
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  About Us
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Blog
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Locations
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  News
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  BLABLA Cares
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                ACCOUNT
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Account
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Order History
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  BLABLA Yourself
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  BLABLA Fan Club
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Notification Settings
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                ASSISTANCE
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Support Center
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Returns Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Cancelletion Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Replacement Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Accessibility Statement
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Terms & Conditions
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Resellers
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                CONNECT WİTH US
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Youtube
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            color="gray"
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            {" "}
            BLABLA. All right reserved.&reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
