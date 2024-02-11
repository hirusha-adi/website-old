import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { purple } from "@mui/material/colors";

const Guide = () => {

  return (
            <>
              <h1 className="center-stuff">Guide / Support</h1>
              <div>
                <h2>How to Use "Is It healthy?"</h2>
                <p>
                  Using our app and website is easy and efficient. The primary function of "Is It Healthy?" is to provide
                  you
                  with detailed information about food additives associated with INS and E-codes. Follow these simple
                  steps to
                  get started:
                </p>
                <ol>
                  <li>
                    <strong>Search Tab:</strong>
                    In the middle tab of our app or website, you'll find the search bar. This
                    is where you enter the INS and E-codes you want to investigate. You can enter multiple codes at
                    once,
                    separated by commas. No need to include "INS" or "E-" before the code. For example, simply input
                    "100,
                    104, 304" and click "Search."
                  </li>
                  <li>
                    <strong>Search Results:</strong>
                    Once you hit "Search," our system will process the codes and provide
                    you with valuable information about each additive.
                  </li>
                </ol>
                <h2>What You'll Find</h2>
                <p>The search results will be displayed in two main sections:</p>
                <ol>
                  <li>
                    <strong>Side Effects:</strong>
                    In this section, you'll see the potential side effects associated with
                    each INS or E-code you entered. We aim to provide you with a clear and concise summary of any known
                    health concerns related to these additives.
                  </li>
                  <li>
                    <strong>Detailed Information:</strong>
                    In the second section, you will find comprehensive details about
                    each additive. This includes information on its origin, common uses in food products, and regulatory
                    approval status. This section is designed to give you a more in-depth understanding of the additive
                    in
                    question.
                  </li>
                </ol>
              </div>

              <h2>Note: I'm not responsible for the accuracy of data. It's all scraped from <a href="https://www.food-info.net/uk/index.htm">www.food-info.net</a></h2>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </>
  );
};

export default Guide;
