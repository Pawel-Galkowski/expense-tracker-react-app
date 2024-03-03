import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { FC, useCallback } from "react";
import { DrawerHeader, drawerWidth } from "./styles";
import {
  MoveToInbox,
  Mail as MailIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { pages } from ".";

interface MobileNavigationProps {
  isOpen: boolean;
  onChange: (state: boolean) => void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({ isOpen, onChange }) => {
  const theme = useTheme();

  const handleDrawerChange = useCallback(
    (state: boolean) => {
      onChange && onChange(state);
    },
    [onChange]
  );

  return (
    <Drawer
      open={isOpen}
      onClose={() => handleDrawerChange(false)}
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
    >
      <DrawerHeader>
        <IconButton onClick={() => handleDrawerChange(false)}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MoveToInbox /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Report problem"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MobileNavigation;
