import React, { Component } from 'react';
import './block_5.less';
import Block_5_item from './components/Block_5_item';
import icon from '../../../assets/BodyShop/block-5/b5-pic1.png';

class Block_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          picture: icon,
          name: 'Иван Иванович',
          title: 'Не могу найти фару для авто',
          description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.',
        },
        {
          picture: icon,
          name: 'Иван Иванович',
          title: 'Не могу найти фару для авто',
          description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции. ',
        },
        {
          picture: icon,
          name: 'Иван Иванович',
          title: 'Не могу найти фару для авто',
          description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.',
        },
        {
          picture: icon,
          name: 'Иван Иванович',
          title: 'Не могу найти фару для авто',
          description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.',
        },
      ],
      reviewRendered: [],
    };
  }


  componentDidMount() {
    const { reviews } = this.state;
    const reviewRendered = reviews.map((review) => (
      <Block_5_item
        key={Math.random()}
        picture={review.picture}
        name={review.name}
        title={review.title}
        description={review.description}
      />
    ));
    this.setState({ reviewRendered });
  }

  render() {
    const { reviewRendered } = this.state;
    return (
      <section className="bodyShop-b5">
        <div className="bodyShop-b5_title">Клиенты о нас</div>
        <div className="bodyShop-b5_reviews">
          {reviewRendered}
        </div>
      </section>
    );
  }
}

export default Block_5;
