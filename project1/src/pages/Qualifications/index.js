import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SCITS" src="data:image/png;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7 CGPA
              </Typography>
              {" — B.Tech Computer Sceience And Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="JITS" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6g_6Mg3FUsKL3cyOUxcyxUde-FSAVPXrO_A&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="JYothishmathi Institute Of Techlogical And SCeinces"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                79% CGPA
              </Typography>
              {" — Diploma-Computer management Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://cdn0.iconfinder.com/data/icons/education-and-school-filled-outline-1/128/Primary_school_student_study_school_girl_avatar_child-512.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Siddharatha high midum school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                83% CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}