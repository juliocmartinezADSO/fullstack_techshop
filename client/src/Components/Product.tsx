import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";
import { actionTypes } from '../reducer';
import {useStateValue} from '../StateProvider';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ product: { _id, name, description, price, category, imageUrl, stock } }) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        _id,
        name, 
        description,
        price,
        category,
        imageUrl,
        stock

      }
    })
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        action={
          <Typography
            // className={classes.action}
            variant='h5'
            color='textSecundary'>
            {accounting.formatMoney(price)}

          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}     
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to card" onClick={addToBasket}>
          <AddShoppingCart font-size="large" />
        </IconButton>




        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );



}
