import React from 'react';
import { TitleBar } from './Title';
import { List } from './List';
import { Bottom } from './Bottom';
import './Card.css';

export function Card(props) {
    return (
        <div className="card">
            <TitleBar
                title={props.data.title}
                bColor={props.data.bColor}
                price={props.data.price}
            />
            <div className="list">
                <List list={props.data.list} />
            </div>
            <div className="bottom">
                <Bottom bColor={props.data.bColor} />
            </div>
        </div>
    );
}
