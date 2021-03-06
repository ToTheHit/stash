import React, { useEffect, useState } from 'react';
import './block_6.less';
import image1 from '../../../assets/Belaz/block-6/pic1.jpg';
import image2 from '../../../assets/Belaz/block-6/pic2.jpg';
import image3 from '../../../assets/Belaz/block-6/pic3.jpg';
import Block_6_item from './components/Block_6_item';

const Block_6 = () => {
  const itemContent = [
    {
      image: image1,
      text: 'Гарантия на целостность поставки<br/>прописана в договоре',
    },
    {
      image: image2,
      text: 'Каждая запчасть доставляется с завода<br/>в жесткой упаковке',
    },
    {
      image: image3,
      text: 'Дополнительный контроль качества<br/>нашими специалистами',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_6_item
        key={Math.random()}
        image={item.image}
        text={item.text}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Belaz-b6">
      <div className="Belaz-b6__content">
        <div className="Belaz-b6__content--title">
          Мы гарантируем сохранность деталей
          <br />
          во время
          перевозки!
        </div>
        <div className="Belaz-b6__content--list">
          {items}
        </div>
      </div>
    </section>
  );
};

Block_6.propTypes = {};

export default Block_6;
