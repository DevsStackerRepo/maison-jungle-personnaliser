import React from 'react';
import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({ name, cover, id, light, water }) {
  function handleClick(plantName) {
    alert(`Vous voulez achetez 1 ${plantName} vous faite un tres bon choix`);
  }
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
      {name}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
    </li>
  );
}

export default PlantItem;
