import React from 'react'
import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/IconButton';
import LoginIcon from '../Images/Vector.png';
import Typography from '@material-ui/core/Typography';
import { Grid} from '@mui/material';
//row images
import Imagex from '../Images/Ellipse 1962 (3).png';
import Imagey from '../Images/Ellipse 1962 (2).png';
//row1 info
import Menu from './row1info.js'
//row2 info
import Menu2 from './row2info.js'
//sliding
import Sliding from './Sliding.js';
//usestyles mui

const useStyles = makeStyles((theme) => ({
  //login button
  button: {
    background: 'linear-gradient(181.67deg, #47B59C 1.42%, #3963AB 318.41%)',
    color: 'white',
    borderRadius: '50px',
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(2),
      right: theme.spacing(1),
    },
  },
  
  loginIcon: {
    marginRight: theme.spacing(1),
   
  },
  //searchbar
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto',
   top:60,
   
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    borderRadius: '50px',
    background: 'white',
 },
  searchInput: {
    width: '100%',
    "& .MuiOutlinedInput-root ":{
      borderRadius: '50px',
     
    },
    
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  searchIcon: {
    background: ' linear-gradient(181.67deg, #47B59C 1.42%, #3963AB 318.41%)',
    borderRadius: '50%',
    padding: theme.spacing(1),
    color: 'white',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize:'3rem',
  },
 //textheading
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 30,
    lineHeight: '35px',
    color: '#FFFFFF',
    textShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
    margin: 10,
    marginBottom: '10px',
  },
  text:{
    color:'white',
  },
  //row1
  flexItem:{
paddingTop:"20px",
paddingBottom:"50px"
  },
   //row2
  flexItem2:{
   marginLeft:"20px",
   marginRight:"20px",
    paddingBottom:"50px"
 },
 
  para1:{
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    color:"white",
    marginTop:"15px",
  },
  para2:{
    justifyContent: "center",
    color:"white",
    marginTop:"20px",
    fontSize: "18px",
    },
    images2:{
      marginTop:"20px",
    }
   
}))
const Home = () => {
  const classes = useStyles();
 
  return (
<div class="rowa">
  {/* row1 */}

  <div class="row1">
    {/* login button */}
    <Button variant="contained" color="primary" className={classes.button}>
    <img src={LoginIcon} alt="Login" className={classes.loginIcon} />
    Login
   </Button>
   {/* search bar */}
   <center>
    <Typography variant="h1" className={classes.heading}>
      Search Engines Of Construction Industry
    </Typography>
  </center>
    <div className={classes.searchContainer}>
    <TextField
      className={classes.searchInput}
      variant="outlined"
      placeholder="Search..."
    />
    <SearchIcon className={classes.searchIcon} />
    </div>
    {/* searching by name */}
         <div class="flex-container">
              <div>Search By:</div>
              <div><img src={Imagex} class="border-white"/>Company Name</div>
              <div><img src={Imagey} class="border-white"/>Product/Service Name</div>
              <div><img src={Imagey} class="border-white"/>All Profile</div>
          </div>
       <center>
        {/* row1 info */}
       <Grid container spacing={0} style={{ marginTop: '20px' }}>
          {Menu.map((imgs, id) => (
            <Grid item xs={6} lg={2} sm={4} key={id}>
              <div className={classes.flexItem}>
                <img src={imgs.img1}  className={classes.image} />
                <Typography variant="body1" className={classes.text}>
                  {imgs.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

       </center>
 
    </div>
   {/* row2info */}
    <div class="row2">
          <center>
              <p class="para">Our Key Value </p>
              <Grid container spacing={1} justifyContent="center">
          {Menu2.map((img2s, id) => (
            <Grid item xs={12} lg={4} sm={12} key={id}>
              <div className={classes.flexItem2}>
                <img src={img2s.img2}  className={classes.images2} />
                <Typography variant="body1" className={classes.para1}>
                  {img2s.para1}
                </Typography>
                <Typography variant="body1" className={classes.para2}>
                  {img2s.para2}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
          </center>
      </div>
      {/* row3 sliding */}
      <Sliding/>
</div>

  )
}

export default Home
