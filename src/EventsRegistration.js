    import * as React from 'react';
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';
    import Stack from '@mui/material/Stack';
    import FormControl from '@mui/material/FormControl';
    import Button from '@mui/material/Button';
    
    import TextField from '@mui/material/TextField';
    import './EventsRegistration.css';

    
    function TabPanel(props) {
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
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
    export default function BasicTabs() {
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} className='tabs-title' style={{margin:'auto'}} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="For You" className='tabs-title' style={{margin:'auto'}}  {...a11yProps(0)} />
              <Tab label="For Others" className='tabs-title' style={{margin:'auto'}}  {...a11yProps(1)} />
              
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} >
              <div className="name">
                    <div className="Login">
                        <div className='log_cont'>  
                        <div className="entire-field" style={{marginRight:'20px',marginLeft:'20px'}}>
                            <h4 className="box-title">Enter Email Address</h4>
                            <TextField id="outlined-basic" className="field_box" label="Enter Email id....." variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Year</h4>
                            <TextField id="outlined-basic" className="field_box" label="Year" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Enter Department</h4>
                            <TextField id="outlined-basic" className="field_box" label="Department" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Section</h4>
                            <TextField id="outlined-basic" className="field_box" label="Section" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Roll NO</h4>
                            <TextField id="outlined-basic" className="field_box" label="Roll no.." variant="outlined"  /><br/>
                        </div>

                    </div>


                    <div className='signin-button'>
                        <Stack spacing={2} direction="row"></Stack>
                        <Button variant="contained" className="signin-button" style={{fontFamily: 'Montserrat'}} >Register</Button>
                    </div>
                    
                </div> 
              </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className="name">
                    <div className="Login">
                        <div className='log_cont'>  
                        <div className="entire-field" style={{marginRight:'20px',marginLeft:'20px'}}>
                            <h4 className="box-title">Enter Email Address</h4>
                            <TextField id="outlined-basic" className="field_box" label="Enter Email id....." variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Year</h4>
                            <TextField id="outlined-basic" className="field_box" label="Year" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Enter Department</h4>
                            <TextField id="outlined-basic" className="field_box" label="Department" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Section</h4>
                            <TextField id="outlined-basic" className="field_box" label="Section" variant="outlined"  /><br/>
                        </div>

                        <div className="entire-field">
                            <h4 className="box-title">Roll NO</h4>
                            <TextField id="outlined-basic" className="field_box" label="Roll no.." variant="outlined"  /><br/>
                        </div>
                    </div>


                    <div className='signin-button'>
                        <Stack spacing={2} direction="row"></Stack>
                        <Button variant="contained" className="signin-button" style={{fontFamily: 'Montserrat'}} >Register</Button>
                    </div>
                    
                </div> 
              </div>
          </TabPanel>
          
        </Box>
      );
    }