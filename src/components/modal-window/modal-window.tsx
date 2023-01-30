import React from 'react';

const ModalWindow = ({ active, setActive, children }: any) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? 'modal__content active' : 'modal__content'}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
