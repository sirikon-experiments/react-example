import React from 'react';
import './BaseLayout.css';

function MyCoolTitle(props) {
    return (
        <span>{`> ${props.value} <`}</span>
    );
}

function BaseLayout(props) {

    const internalTitle = props.title ? props.title : 'Ola';

    miMetodoAsincrono()
        .then((result) => console.log(result))

    const result = await miMetodoAsincrono();
    console.log(result);

  return (
    <div className="base-layout">
        <div className="base-layout-content">
            <MyCoolTitle value={props.title}></MyCoolTitle>
            {props.children}
        </div>
    </div>
  );
}

export default BaseLayout;
