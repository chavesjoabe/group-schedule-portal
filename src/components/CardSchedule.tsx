import * as React from 'react';

import { Box, Button, Chip, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Modal, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { data, ScheduleCardData } from '../data';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { getHeaderDescription } from '../utils/utils';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #c4c4c4',
  boxShadow: 24,
  p: 4,
};

function RecipeReviewCard({ data }: ScheduleCardData) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toRemoveKeys: string[] = [
    'serviceDayName',
    'weekDayName',
    'ministry',
  ];

  const gigRoles: string[] = [
    'drummer',
    'pianist',
    'guitar_player',
    'bassist',
    'acoustic_guitar_player',
    'horn_player',
    'sax_player',
  ];

  const gigParticipants = Object.entries(data).filter(item => gigRoles.includes(item[0]));
  const vocalParticipants = Object.entries(data)
    .filter(item => !gigRoles.includes(item[0]))
    .filter(item => !toRemoveKeys.includes(item[0]));

  const listItems = [
    {
      name: 'Banda',
      participants: gigParticipants,
    },
    {
      name: 'Vocal',
      participants: vocalParticipants,
    }
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={data.serviceDayName.split(' ')[0]}
        subheader={data.weekDayName}
      />
      <CardContent>
        <Chip label={data.ministry} variant="outlined" />
      </CardContent>
      <div>
        <Button onClick={handleOpen}> Informaçoes </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {`${data.serviceDayName.split(' ')[0]} - ${data.weekDayName}`}
            </Typography>
            <Typography variant='h6' id="modal-modal-description" sx={{ mt: 2 }}>
              {`Ministro - ${data.ministry}`}
            </Typography>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
              subheader={<li />}
            >
              {listItems
                .map((item) => (
                  <li key={`section-${item.name}`}>
                    <ul>
                      <ListSubheader>
                        <ListItemText>{item.name}</ListItemText>
                        <Divider />
                      </ListSubheader>
                      {item.participants.map(participant => (
                        <ListItemButton>
                          <ListItemIcon>
                            {item.name === 'Banda' ? <LibraryMusicIcon /> : <MicExternalOnIcon />}
                          </ListItemIcon>
                          <ListItemText primary={`${getHeaderDescription(participant[0])} - ${participant[1]}`} />
                        </ListItemButton>
                      ))}
                    </ul>
                  </li>
                ))}
            </List>
          </Box>
        </Modal>
      </div>
    </Card>
  );
}

export const CardSchedule = () => {

  return (
    <Box sx={{ width: '100%' }}>
      <Grid2 container spacing={2}>
        {data.map((item) => (
          <Grid2 xs={2}>
            <RecipeReviewCard data={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}
