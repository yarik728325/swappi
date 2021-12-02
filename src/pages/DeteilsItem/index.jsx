import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'

export default function DeteilItem() {
  const { oneItem } = useSelector(state=>state.albums);
  console.log(oneItem);
  const { name, gender, skin_color, height,hair_color } = oneItem;
  return (
    <div className="container">
      <table className="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Skin_color</th>
            <th>Height</th>
            <th>Hair Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Name">{name}</td>
            <td data-label="Gender">{gender}</td>
            <td data-label="Skin_color">{skin_color}</td>
            <td data-label="Height">{height}</td>
            <td data-label="Hair Color">{hair_color}</td>
        </tr>
    </tbody>
    </table>
    </div>
  )
}
