import React from 'react';
import { AppBar, ClickAwayListener,MenuList, Grow, Popper, Paper, Typography, Toolbar, InputBase, Hidden, IconButton, SwipeableDrawer, MenuItem} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import logo1 from '../../images/lg1.jpg'
import useStyles from './NavStyles'

export default function NavBar({cart}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    return(
        <>
            <AppBar position='sticky' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                </Toolbar>
                <Toolbar className={classes.toolbar1}>
                <div className={classes.outGrow}/>
                    <Typography component={Link} to='/'>
                        <img 
                            src={logo1}
                            className={classes.image}
                            alt='logo'
                        />
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.outGrow}/>
                </Toolbar>
                <Hidden xsDown>
                <Toolbar className={classes.toolbar2}>
                <div className={classes.outGrow}/>
                    <Typography component={Link} to="/" variant="body1" className={classes.typoColor}>
                        Trang chủ
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography component={Link} to="/howitworks" variant="body1" className={classes.typoColor}>
                        Dịch vụ
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography component={Link} to="/listproducts" variant="body1" className={classes.typoColor}>
                        Mẫu đá
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography component={Link} to="/album" variant="body1" className={classes.typoColor}>
                        Album
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography component={Link} to="/contactus" variant="body1" className={classes.typoColor}>
                        Thông tin
                    </Typography>
                    <div className={classes.grow}/>
                    <Typography component={Link} to="/cart" variant="body1" className={classes.typoColor}>
                        <div className={classes.divCart}>
                        <ShoppingCartOutlinedIcon fontSize='small'/><p>(</p><p style={{ color: 'red' }}>{cart.length}</p><p>)</p>
                        </div>
                    </Typography>
                    <div className={classes.outGrow}/>
                </Toolbar>
                </Hidden>
                <Hidden smUp>
                    <Toolbar className={classes.toolbar2}>
                        <IconButton
                            color="inherit"
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>  
                                    <MenuItem onClick={handleClose} component={Link} to="/">
                                        Trang chủ
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/howitworks">
                                        Dịch vụ
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/listproducts">
                                        Mẫu đá
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/cart">
                                        Album
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/contactus">
                                        Thông tin
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to="/cart">
                                        <div className={classes.divCart}>
                                            <ShoppingCartOutlinedIcon fontSize='small'/><p>(</p><p style={{ color: 'red' }}>{cart.length}</p><p>)</p>
                                        </div>
                                    </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </Toolbar>
                </Hidden>
            </AppBar>
        </>
    )    
}