import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

import './index.less';

class QrColor extends Component {

  constructor(option) {
    super(option);

    this.state = {
      expand: false,
    }

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.close);
  }

  componentWillMount() {
    document.removeEventListener('mousedown', this.close);
  }

  handleChangeComplete(color) {
    const { onChange } = this.props;
    onChange && onChange(color.hex);
  }

  expand(e) {
    this.setState({
      expand: true,
    });

    e.stopPropagation();
  }

  close() {
    this.setState({
      expand: false,
    })
  }

  render() {
    const { value } = this.props;

    return (
      <div className="qr-color" onMouseDown={e => e.stopPropagation()}>
        <div className="qr-color-bar" onClick={(e) => this.expand(e) }>
          <i className="color" style={{ background: `${value}`}}></i>
          <span className="color-string">{value}</span>
        </div>
        {
          this.state.expand && (
            <SketchPicker
            color={ value }
            onChangeComplete={ color => this.handleChangeComplete(color) }
          />
          )
        }
      </div>
    )
  }
}

export default QrColor;