import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import LiqCard from './LiqCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // root: {
        //     display: 'flex',
        //     flexWrap: 'wrap',
        //     '& > *': {
        //         margin: theme.spacing(1),
        //         width: theme.spacing(16),
        //         height: theme.spacing(16),
        //     },
        // },
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            // maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            '& > *': {
                margin: theme.spacing(1),
                // width: theme.spacing(16),
                // height: theme.spacing(16),
            },
        },

    }),
);

export interface SymbolCount {
    [key: string]: number;
}

interface Props {
    count: number;
    symbolCount: SymbolCount;
}

function LiqStats(props: Props) {
    const classes = useStyles();
    const { count, symbolCount } = props;

    var items = Object.keys(symbolCount).map(function (key) {
        return [key, symbolCount[key]];
    });

    items.sort((first, second) => {
        return (second[1] as number) - (first[1] as number);
    });

    const topList = items.slice(0, 5);

    return (
        <div className={classes.root}>
            <Grid container alignItems="center">
                <Grid item>
                    <LiqCard title="Count">{count}</LiqCard>
                </Grid>
                <Grid item>
                    <LiqCard title="Top symbol">
                        <ol>
                            {topList.map((item, index) => {
                                return <li>{item[0]}: {item[1]}</li>
                            })}
                        </ol>
                    </LiqCard>
                </Grid>
            </Grid>
        </div>
    );
}

export default LiqStats;