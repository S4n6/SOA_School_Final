import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import TheatersIcon from "@mui/icons-material/Theaters";
import CategoryIcon from "@mui/icons-material/Category";
import ReportIcon from "@mui/icons-material/Report";
import TvIcon from "@mui/icons-material/Tv";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <TvIcon />
      </ListItemIcon>
      <Accordion
        sx={{
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          TV Show
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton>
            <ListItemText primary="Show All" />
          </ListItemButton>
        </AccordionDetails>
        <AccordionDetails>
          <ListItemButton>
            <ListItemText primary="Seasons" />
          </ListItemButton>
        </AccordionDetails>
        <AccordionDetails>
          <ListItemButton>
            <ListItemText primary="Eposides" />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Movie" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí category" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí người dùng" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Quản lí báo cáo" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
