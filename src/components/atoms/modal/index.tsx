import { ReactNode } from "react";

export type ModalTypes = {
  children: ReactNode;
  title?: string | any;
  open: boolean;
  handleClose?: any;
};

const Modal = (props: ModalTypes) => {
  const { children, title = "", open = false, handleClose = () => {} } = props;
  return (
    <>
      {open && (
        <>
          <div onClick={handleClose} className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>{title}</h2>
              <button onClick={handleClose} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal__main">{children}</main>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
