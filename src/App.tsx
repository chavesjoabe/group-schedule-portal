import * as React from 'react';
import Box from '@mui/material/Paper';
import { data } from './data';
import { Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ScheduleTable from './components/ScheduleTable';
import { CardSchedule } from './components/CardSchedule';
import { NewTableSchedule } from './components/NewTableSchedule';
import { Login } from './components/Login';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Tabela" {...a11yProps(0)} />
          <Tab label="Cards" {...a11yProps(1)} />
          <Tab label="New Table" {...a11yProps(2)} />
          <Tab label="Criaçao de usuário" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ScheduleTable data={data} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardSchedule />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <NewTableSchedule />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Login />
      </CustomTabPanel>
    </>
  );
}

