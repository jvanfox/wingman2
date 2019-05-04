import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import selectBar from "./components/selectBar";


import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 
 
  toolbarEnd: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarEndTitle: {
    flex: 1,
  },
 
 
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});









function Main(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          
          
          <IconButton>
          
          </IconButton>
          <Button variant="outlined" size="small">
            Login Name
          </Button>
        </Toolbar>
        
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    WINGMAN
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                   Your personal dating assistant...
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
         
         
          <div className={classes.root}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
               <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label="Name of Companion"
        variant="outlined"
        id="custom-css-outlined-input"
      />
       <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label="City"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label="Time of Engagment"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <TextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label="Date of Engagment"
        variant="outlined"
        id="custom-css-outlined-input"
      />
        <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6
          </Paper>
        </Grid>
        </div>
                     
                 
                
             
          
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
           
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              
            </Grid>
            {/* End sidebar */}
          </Grid>
          <Toolbar className={classes.toolbarEnd}>
          
          <Button variant="outlined" size="small">
            Submit Information
          </Button>
          
          <Button variant="outlined" size="small">
            Past Engagements
          </Button>
        </Toolbar>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Wingman - Developed by Gina Washington - Elena Mudrakova - Jeffrey Young
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);