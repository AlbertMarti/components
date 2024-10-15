import { h, VNode } from 'preact';
import {Searcher} from './searcher';
import './style.css';

interface Props {
    color?: string;
}

export default function App(props: Props): VNode {
    return (
        <div>
            <Searcher />
        </div>
    );
}
