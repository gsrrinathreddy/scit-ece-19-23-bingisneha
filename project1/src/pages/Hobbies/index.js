import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.stopthebreaks.com/wp-content/uploads/2020/02/5-gift-ideas-for-a-music-lover.jpg',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190130175354/iStock-530568548.jpg',
    title: 'Travelling',
    
  },
  {
    img: 'https://elevatedestinations.com/wp-content/uploads/2020/01/andre-furtado-JtV6zyOZSrA-unsplash-1024x683.jpg',
    title: 'Photography',
    
  },
  {
    img: 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/04/video-game-controller-0403201.jpg',
    title: 'Playing',
    
    cols: 2,
  },
  
];