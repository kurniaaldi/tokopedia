import { ReactNode } from "react";

export type ModalTypes = {
  children: ReactNode;
  title?: ReactNode | string | any;
  open: boolean;
  handleClose?: any;
};

const Dialog = (props: ModalTypes) => {
  const { children, title = "", open = false, handleClose = () => {} } = props;
  return (
    <>
      {open && (
        <>
          <div onClick={handleClose} className="overlay"></div>
          <div data-testid="dialog-id" className="modal">
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                paddingBottom: "0",
              }}
            >
              {title}
            </div>
            <main className="modal__main">{children}</main>
          </div>
        </>
      )}
    </>
  );
};

export default Dialog;
