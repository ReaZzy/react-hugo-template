import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const elems: HTMLCollectionOf<Element> =
  document.getElementsByTagName('component');
const promises = [];

const getElementAttrs = (el: Element) => {
  const props: { [key: string]: string } = {};
  [].slice.call(el.attributes).forEach(({ name, value }) => {
    props[name] = value;
    return true;
  });
  return props;
};

function withRoute(Component: React.FC) {
  return function withRouteClosure() {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  };
}

const importRender = (props: { [key: string]: string }): Promise<void> => {
  const { id, ...rest } = props;
  return new Promise((resolve, reject) => {
    import(`./components/${id}`)
      .then((module: React.FC) => {
        const component = React.createElement(
          /* eslint-disable-next-line */
          withRoute((module as any).default),
          rest,
        );

        const item = document.getElementById(id);
        ReactDOM.render(component, item, () => {
          resolve();
        });
      })
      .catch(() => reject());
  });
};

const checkReactComponents = () => {
  /* eslint-disable-next-line */
  for (const item of elems) {
    if (item.hasAttribute('id')) {
      promises.push(importRender(getElementAttrs(item)));
    }
  }
};

checkReactComponents();
