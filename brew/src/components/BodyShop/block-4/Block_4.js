import React, {Component} from 'react';

import './block_4.less'
import Block_4_item from "./components/Block_4_item";
import icon1 from '../../../assets/BodyShop/block-4/pic1.png';
import icon2 from '../../../assets/BodyShop/block-4/pic2.png';
import icon3 from '../../../assets/BodyShop/block-4/pic3.png';
import icon4 from '../../../assets/BodyShop/block-4/pic4.png';
import icon5 from '../../../assets/BodyShop/block-4/pic5.png';
import icon6 from '../../../assets/BodyShop/block-4/pic6.png';
import icon7 from '../../../assets/BodyShop/block-4/pic7.png';
import icon8 from '../../../assets/BodyShop/block-4/pic8.png';
import icon9 from '../../../assets/BodyShop/block-4/pic9.png';
import icon10 from '../../../assets/BodyShop/block-4/pic10.png';
import icon11 from '../../../assets/BodyShop/block-4/pic11.png';
import icon12 from '../../../assets/BodyShop/block-4/pic12.png';
import icon13 from '../../../assets/BodyShop/block-4/pic13.png';

class Block_4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                icon1,
                icon2,
                icon3,
                icon4,
                icon5,
                icon6,
                icon7,
                icon8,
                icon9,
                icon10,
                icon11,
                icon12,
                icon13
            ],
            iconRendered: []
        }
    }

    componentDidMount() {
        let iconRendered = this.state.icons.map(icon => {
            return <Block_4_item
                key={Math.random()}
                picture={icon}
            />
        });
        this.setState({iconRendered: iconRendered});
    }

    render() {
        return(
            <section className={'bodyShop-b4'}>
                <div className="bodyShop-b4_text">Имеем в наличии детали на авто:</div>
                <div className="bodyShop-b4_icons">
                    <div className="bodyShop-b4_icons-line" style={{marginTop: '60px'}}>
                        {this.state.iconRendered[0]}
                        {this.state.iconRendered[1]}
                        {this.state.iconRendered[2]}
                        {this.state.iconRendered[3]}
                        {this.state.iconRendered[4]}
                    </div>
                    <div className="bodyShop-b4_icons-line" style={{marginTop: '20px', width: '80%'}}>
                        {this.state.iconRendered[5]}
                        {this.state.iconRendered[6]}
                        {this.state.iconRendered[7]}
                        {this.state.iconRendered[8]}
                    </div>
                    <div className="bodyShop-b4_icons-line" style={{marginTop: '20px', width: '80%'}}>
                        {this.state.iconRendered[9]}
                        {this.state.iconRendered[10]}
                        {this.state.iconRendered[11]}
                        {this.state.iconRendered[12]}
                    </div>
                </div>
                <div className="bodyShop-b4_text" style={{marginTop: '80px'}}>Вы можете посмотреть что происходит у нас!</div>
                <div className="bodyShop-b4_videoBorder">
                    <div className="bodyShop-b4_videoBorder-content"/>
                </div>

            </section>
        )
    }
}

export default Block_4;