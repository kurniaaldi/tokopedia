import { render, screen } from "@testing-library/react";
import Card from "./index";
import renderer from "react-test-renderer";

test("card", () => {
  const Component = () => <p>card</p>;
  render(
    <Card>
      <Component />
    </Card>
  );

  const cardElement = screen.getByTestId("card-id");
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("card");
  expect(cardElement).toContainHTML("<p>card</p>");
});

test("matches snapshot", () => {
  const Component = () => <p>card</p>;

  const tree = renderer
    .create(
      <Card>
        <Component />
      </Card>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
