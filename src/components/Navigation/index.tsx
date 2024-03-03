import { Button, useTheme } from "@mui/material";
import React, { useCallback, useState } from "react";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import MainNavigation from "./MainNavigation/MainNavigation";

export const Navigation: React.FC = () => {
  const theme = useTheme();
  const [mobileNavOpen, isMobileNavOpen] = useState<boolean>(false);

  const onMobileNavChange = useCallback((state: boolean) => {
    isMobileNavOpen(state);
  }, []);

  return (
    <nav>
      <Button onClick={() => isMobileNavOpen(true)}>Open drawer</Button>
      <MobileNavigation
        isOpen={mobileNavOpen}
        onChange={onMobileNavChange}
        sx={{ display: theme.breakpoints.down("md") ? "flex" : "none" }}
      />
      <MainNavigation
        sx={{ display: theme.breakpoints.down("md") ? "none" : "flex" }}
      />
    </nav>
  );
};
