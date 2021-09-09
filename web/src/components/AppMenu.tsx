import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ListItemLink from './ListItemLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    handleDrawerToggle: () => void;
    mobileOpen: boolean;
}

export default function ResponsiveDrawer(props: Props) {
    const { handleDrawerToggle, mobileOpen } = props;
    const classes = useStyles();
    const theme = useTheme();

    const handleListItemLink = () => {
        if (mobileOpen) {
            handleDrawerToggle();
        }
    }

    const list = (
        <div role="presentation" onClick={handleListItemLink}>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItemLink to="/" primary="Main" icon={<InboxIcon />} />
                <ListItemLink to="/dashboard" primary="Dashboard" icon={<MailIcon />} />
            </List>
            <Divider />
            <List>
                <ListItemLink to="/liquidations" primary="Liquidations" icon={<InboxIcon />} />
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="menu">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {list}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {list}
                </Drawer>
            </Hidden>
        </nav>
    );
}
