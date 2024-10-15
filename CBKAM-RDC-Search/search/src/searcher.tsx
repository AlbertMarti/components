import { Component, h } from 'preact';
export class Searcher extends Component {
    state={value:''}

    onClick= e=> {
        console.log("hola");
    }

    onInput= e=> {
        console.log(e.currentTarget.value);
    }

    render(props,state) {
        return(
            <div>
            <input type="text" onInput={this.onInput} />
            <button type="button" onClick={this.onClick}>Click</button>
            </div>
        );    
    }
}