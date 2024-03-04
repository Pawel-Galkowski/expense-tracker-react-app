import { useTranslation } from "react-i18next";
import { LanguageType, languages } from "../../utils";
import LanguageIcon from "@mui/icons-material/Language";
import { useCallback } from "react";
import { FormControl, Select, MenuItem, SxProps } from "@mui/material";

const iconColor = '#fff'

export const LanguagesDropdown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng: LanguageType) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const LanguageController = useCallback(
    () => (
      <Select
        value={i18n.language as string}
        label="Languages"
        onChange={(event) => changeLanguage(event.target.value as LanguageType)}
        sx={languageControllerStyles}
      >
        <MenuItem value={languages.de}>{languages.de}</MenuItem>
        <MenuItem value={languages.en}>{languages.en}</MenuItem>
        <MenuItem value={languages.pl}>{languages.pl}</MenuItem>
      </Select>
    ),
    [changeLanguage, i18n.language]
  );

  return (
    <FormControl
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <LanguageIcon fill={iconColor} />
      <LanguageController />
    </FormControl>
  );
};

const languageControllerStyles: SxProps = {
  '.MuiOutlinedInput-notchedOutline': {
    borderWidth: 0
  },
  '& .MuiSelect-select': {
    color: iconColor,
  },
  '& .MuiSelect-icon': {
    fill: iconColor,
  }
}