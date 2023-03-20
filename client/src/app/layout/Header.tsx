import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkMode: boolean;
  hanldeThemeChange: () => void;
}

export default function Header({ darkMode, hanldeThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">ECommerce</Typography>
        <Switch checked={darkMode} onChange={hanldeThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
