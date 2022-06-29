import { render, screen } from "@testing-library/react";
import Dialog from "./index";
import renderer from "react-test-renderer";

test("dialog", () => {
  const Component = () => <p>card</p>;

  let data = {
    open: true,
    handleClose: () => (data = { ...data, open: false }),
    title: "header",
  };

  render(
    <Dialog title={data.title} handleClose={data.handleClose} open={data.open}>
      <Component />
    </Dialog>
  );

  const dialogElement = screen.getByTestId("dialog-id");
  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveTextContent("header");
  expect(dialogElement).toContainHTML(
    `<div style="width: 100%; display: flex; align-items: center; justify-content: center; padding: 1rem 1rem 0px 1rem;">header</div><main class="modal__main"><p>card</p></main>`
  );
});

test("matches snapshot", () => {
  const Component = () => <p>card</p>;

  let data = {
    open: true,
    handleClose: () => (data = { ...data, open: false }),
    title: "header",
  };

  const tree = renderer
    .create(
      <Dialog
        title={data.title}
        handleClose={data.handleClose}
        open={data.open}
      >
        <Component />
      </Dialog>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
