import React, { useState, useEffect } from 'react';
import Binance, { ReconnectingWebSocketHandler } from 'binance-api-node';
import LiqTable, { Data, createData } from './LiqTable';
import LiqStats, {SymbolCount} from './LiqStats';
import objectHash from 'object-hash';

const client = Binance();
let clean: ReconnectingWebSocketHandler | null = null;

function Liquidations() {
    const [rows, setRows] = useState<Data[]>([]);
    const [count, setCount] = useState(0);
    const [symbolCount, setSymbolCount] = useState<SymbolCount>({})
    useEffect(() => {
        setCount(rows.length);

        const symbols: SymbolCount = {};
        rows.forEach(r => {
            if (r.symbol in symbols) {
                symbols[r.symbol]++;
            } else {
                symbols[r.symbol] = 1;
            }
        });
        setSymbolCount(symbols);
    }, [rows]);

    useEffect(() => {
        start();
        return () => {
            stop();
        }
    }, [])

    const start = () => {
        console.log("start");
        if (clean) {
            clean();
        }
        clean = client.ws.futuresAllLiquidations(liquidation => {
            const row = createData(
                objectHash(liquidation),
                Number.parseInt(liquidation.accumulatedQty, 10),
                Number.parseFloat(liquidation.averagePrice),
                Number.parseInt(liquidation.lastFilledQty, 10),
                Number.parseInt(liquidation.origQty, 10),
                Number.parseFloat(liquidation.price),
                liquidation.side,
                liquidation.status,
                liquidation.symbol,
                liquidation.time,
                liquidation.timeInForce,
                liquidation.type,
            );
            setRows(rows => [...rows, row]);
        })
    }

    const stop = () => {
        console.log("stop");
        if (clean) {
            console.log("clean");
            clean();
            clean = null;
        }
    }

    return (
        <>
            {/* <Button variant="contained" color="primary" onClick={start}>Start</Button>
            <Button variant="contained" color="primary" onClick={stop}>Stop</Button> */}
            <LiqStats count={count} symbolCount={symbolCount} />
            <LiqTable rows={rows} />
        </>
    );
}

export default Liquidations;