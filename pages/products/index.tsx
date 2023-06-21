import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LogoutIcon from '@mui/icons-material/Logout';
import Rating from '@mui/material/Rating';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import Button from '@mui/material/Button';
import styles from "../../styles/Home.module.css";

// seperate modules custom made with few tweaks
import LikeButton from '../lib/likeButton'
import CommentButton from '../lib/commentButton'

// seperate module for fetching data
import getpostData from "../lib/fetchPosts";

// function for fetching data and loading into 'postData'
export async function getStaticProps() {
  const postData = await getpostData();
  return {
    props: { postData },
  };
}

// custom css for image style written here for easier customization/editing
const prodImageStyle = {
  objectFit: "contain",
  height: "100%",
  maxHeight: "50vh"
};

// using a variable to set width of profile sidebar and side-navbar
const drawerWidth = '15vw';

// function to capitalize words 
function Capitalize(str){
  let words = str.split(' ')
  for(let i=0;i<words.length;i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join(' ');
}

export default function PostPage({ postData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{padding:"0",marginRight: (drawerWidth.split("vw")[0] * 2) + "vw"}}>
{postData.map(({ id,title,category,description,image,price,rating }) => (
<Card sx={{ width: "50vw",marginTop: "10vh" }}>
      <CardHeader 
      className='card-header'
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {Capitalize(category[0])}
          </Avatar>
        }
        title={title}
        subheader={Capitalize(category)}
      />
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={prodImageStyle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='stacking-container' style={{justifyContent: "space-evenly"}}>
          <LikeButton />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <CommentButton />
          {/* Creating a seperate div so the rating stars and the count stick together */}
        <div className='rating-container'>
          <Rating name="read-only" precision={0.1} value={rating.rate} readOnly />
          <Typography variant="body2" color="text.secondary">
            {rating.rate}({rating.count})
          </Typography>
        </div>
        <Button className='buy-btn' variant="outlined">Buy Now &nbsp;<Typography  variant="body1" color="text.primary">
          ${price}
        </Typography></Button>
      </CardActions>
    </Card>
    ))}

{/* Creating custom div for profile sidebar */}
<div className='profile-sidebar' style={{right: drawerWidth,width: drawerWidth}}>
<PermIdentityTwoToneIcon style={{width:"100%",marginTop:"25vh",height:"20vh"}}/>
    <Typography style={{width:"100%",textAlign: "center",fontSize: "1.5rem"}}>User Name </Typography>
</div>

{/* Creating navbar-sidebar */}
<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary='Search'/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary='Posts'/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LiveTvIcon />
                </ListItemIcon>
                <ListItemText primary='Live'/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        
        <List className='sidebar-footer'>
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Logout'/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
        {/* </ul> */}
      </main>
    </div>
  );
}