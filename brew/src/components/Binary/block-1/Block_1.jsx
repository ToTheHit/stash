import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './block_1.less';
import background from '../../../assets/Binary/Background.jpg';
import logo from '../../../assets/Binary/layer-33-copy-2.png';
import TextBlock from '../general/TextBlock';

const Block_1 = forwardRef((props, ref) => {
  const { setScrollTo } = props;
  return (
    <header
      className="Binary-b1"
      // style={{ backgroundImage: `url(${background})` }}
      ref={ref}
    >
      <div
        className="parallax"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="Binary-b1__logo" style={{ backgroundImage: `url(${logo})` }} />
      <TextBlock
        title="Clear, smart, attractive design"
        subtitle="for your app, logo, website"
        Tag="h1"
      />
      <button type="button" className="Binary-b1__button" onClick={() => setScrollTo(2)}>
        READ MORE
      </button>
    </header>
  );
});

Block_1.propTypes = {
  setScrollTo: PropTypes.func.isRequired,
};

export default Block_1;
