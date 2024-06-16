// src/MenuClick.js
import React, { useState } from 'react';
import { Menu } from 'devextreme-react/menu';
import 'devextreme/dist/css/dx.light.css';

const Opcoes = [
  { text: 'Tela 1', path: '/tela1' },
  { text: 'Tela 2', path: '/tela2' },
  { text: 'Tela 3', path: '/tela3' }
];

const MenuClick = ({ history }) => {
  const [isMenuVisivel, setMenuVisivel] = useState(false);

  const toggleMenu = () => {
    setMenuVisivel(!isMenuVisivel);
  };

  const onItemClick = (e) => {
    const item = e.itemData;
    if (item.path) {
      history.push(item.path);
      setMenuVisivel(false);
    }
  };

  return (
    <div>
      <img
        src="/images/retangulos-de-menu.png"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      />
      {isMenuVisivel && (
        <Menu
          dataSource={Opcoes}
          displayExpr="text"
          onItemClick={onItemClick}
          orientation='vertical'
        />
      )}
    </div>
  );
};

export default MenuClick;
