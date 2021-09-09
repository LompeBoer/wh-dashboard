import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppMenu from './AppMenu';
import TopBar from './TopBar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    children?: React.ReactNode;
}

export default function Layout(props: Props) {
    const { children } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <TopBar handleDrawerToggle={handleDrawerToggle} />
            <AppMenu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}
