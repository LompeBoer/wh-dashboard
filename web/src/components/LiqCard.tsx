import React, { ReactNode } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // width: '100%',
            // maxWidth: 360,
            width: 220,
            backgroundColor: theme.palette.background.paper,
            margin: theme.spacing(1),
        },
        chip: {
            margin: theme.spacing(0.5),
        },
        section1: {
            margin: theme.spacing(3, 2),
            height: 18,
        },
        section2: {
            margin: theme.spacing(2),
        },
        section3: {
            margin: theme.spacing(3, 1, 1),
        },
    }),
);

interface Props {
    title: string;
    children?: ReactNode;
}

function LiqCard(props: Props) {
    const classes = useStyles();
    const { title, children } = props;

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6">
                            {title}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <Typography gutterBottom variant="body1">
                    {children}
                </Typography>
            </div>
        </div>
    );
}

export default LiqCard;