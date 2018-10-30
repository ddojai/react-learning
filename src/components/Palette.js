import React, {Component} from 'react';
import './Palette.css';

const Color = ({color, active, onClick}) => {
  return (
    <div className={`color ${active ? 'active' : ''}`}
         style={{background : color}}
         onClick={() => onClick(color)}
    >
    </div>
  );
};

class Palette extends Component {

  render() {
    const {colors, selected, onSelect} = this.props;

    const colorList = colors.map(
      ({color}) => (
        <Color
          color={color}
          active={selected === color}
          onClick={onSelect}
          key={color}
        />
      )
    );

    return (
      <div className="palette">
        {colorList}
      </div>
    )
  }
}

export default Palette;