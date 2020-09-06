import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = (props) => {
    console.log(props.post)

    const{title,body,id} = props.post

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Container fixed>
        <Card className={classes.root}>
        <ButtonBase className={classes.image} col-lg-6 col-md-6 col-sm-12 col-12 m-4>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.large} />
        </ButtonBase>
      <CardContent>
        <Typography className={classes.title} col-lg-6 col-md-6 col-sm-12 col-12 m-4 style={{maxWidth: '18rem' }} color="textSecondary" gutterBottom>
          Title: {title}
        </Typography>
        <Typography variant="h5" component="h2">
          Welcome
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Id: {id}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
       <Link to={`/postDetails/${id}`}><Button variant="contained" color="primary" size="small">See More</Button></Link>
        
      </CardActions>
      
    </Card>
    </Container>    
    );
};

export default Post;