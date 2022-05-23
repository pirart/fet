import React from 'react';
import './Slider.css';
/*
s.addEventListener('mousedown', e => {
    s.mouseX = e.screenX;
    s.mouseDown = true;
});
s.addEventListener('mousemove', e => {
    if (s.mouseDown) {
        var dx = e.screenX - s.mouseX;
        s.mouseX += dx;
        s.marginLeft += dx;
        s.style.marginLeft = `${s.marginLeft}px`
    }
});
s.addEventListener('mouseup', e => {
    s.mouseDown = false;
});
*/

/*
function _mousedown(e) {

}

function _mousemove(e) {

}

function _mouseup(e) {
    
}

function Slider1(props) {
    var list = props.files.split('|').map(e => {
        return (
            <li className="Slider__item">
                <img className="Slider__img" src={e} alt="cat image" />
            </li>
        )
    });

    return (
        <div className="Slider" onMouseDown={_mousedown} onMouseUp={_mouseup} onMouseMove={_mousemove}>
            <ul className="Slider__list">
                {list}
            </ul>
        </div>
    );
}
*/

class Slider extends React.Component {
    constructor() {
        super();

        this.marginLeft = 0;
        // this.marginLeftStyle = '0px'
        this.state = {
            marginLeftStyle: '0px'
        }
    }

    _mousedown(e) {
        this.mouseX = e.screenX;
        this.mouseDown = true;
    }

    _mousemove(e) {
        if (this.mouseDown) {
            var dx = e.screenX - this.mouseX;
            this.mouseX += dx;
            this.marginLeft += dx;
            //this.marginLeftStyle = `${this.marginLeft}px`
            this.setState({marginLeftStyle: `${this.marginLeft}px`})
        }
    }

    _mouseup(e) {
        this.mouseDown = false;
    }

    render() {
        var list = this.props.files.split('|').map(e => {
            return (
                <li className="Slider__item">
                    <img className="Slider__img" src={e} alt="cat image" />
                </li>
            )
        });
        return (
            <div className="Slider"
                onMouseDown={(e) => this._mousedown(e)} 
                onMouseUp={(e) => this._mouseup(e)} 
                onMouseMove={(e) => this._mousemove(e)} 
                style={{ marginLeft: this.state.marginLeftStyle }}>
                <ul className="Slider__list">
                    {list}
                </ul>
            </div>
        );
    }
}

export default Slider;