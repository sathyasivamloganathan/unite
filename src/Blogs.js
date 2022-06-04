import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Blogs.css';
import { IoIosArrowBack } from "react-icons/io";

export default function Blogs() {
  return (
      <div className='cards'>
          <div class='back-button'><IoIosArrowBack/></div>
          <p className='unite-blogs'>Unite Blogs</p>
          <div className='col cards-separate' style={{marginTop:'100px'}}>
            <Card sx={{ maxWidth: 345, borderRadius:'16px' }}>
            <CardMedia
                component="img"
                height="140"
                // image="C:\Users\ELCOT\Desktop\unite\src\unite.png"
                alt="unite"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" class='text'>
                Blog-1
                </Typography>
                <Typography variant="body2" color="text.secondary" class='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>

            
        </div>

        <div className='col  cards-separate'>
            <Card sx={{ maxWidth: 345 ,borderRadius:'16px'}}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="unite"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  class='text'>
                Blog-2
                </Typography>
                <Typography variant="body2" color="text.secondary"  class='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>

        <div className='col  cards-separate'>
            <Card sx={{ maxWidth: 345 ,borderRadius:'16px'}}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="unite"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  class='text'>
                Blog-3
                </Typography>
                <Typography variant="body2" color="text.secondary"  class='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>

        <div className='col  cards-separate'>
            <Card sx={{ maxWidth: 345,borderRadius:'16px' }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="unite"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  class='text'>
                Blog-4
                </Typography>
                <Typography variant="body2" color="text.secondary"  class='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>

        <div className='col  cards-separate'>
            <Card sx={{ maxWidth: 345 , borderRadius:'16px'}}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="unite"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  class='text'>
                Blog-5
                </Typography>
                <Typography variant="body2" color="text.secondary"  class='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    </div>
  );
}
