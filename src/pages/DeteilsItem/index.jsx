import React from 'react';
import { useParams } from 'react-router';

export default function DeteilItem() {
  const {id} = useParams();

  return (
    <div>
        {id}
    </div>
  )
}
