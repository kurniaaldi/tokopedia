import { render, screen } from "@testing-library/react";
import Pagination from "./index";
import renderer from "react-test-renderer";

test("pagination", () => {
  let data = {
    total: 5000,
    currentPage: 2,
    hasNextPage: true,
  };

  render(
    <Pagination
      total={data.total}
      next={(page: number) => console.log(page)}
      currentPage={data.currentPage}
      previous={(page: number) => console.log(page)}
      hasNextPage={data.hasNextPage}
    />
  );

  const dialogElement = screen.getByTestId("pagination-id");
  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveTextContent("2");
});

test("matches snapshot", () => {
  let data = {
    total: 5000,
    currentPage: 2,
    hasNextPage: true,
  };

  const tree = renderer
    .create(
      <Pagination
        total={data.total}
        next={(page: number) => console.log(page)}
        currentPage={data.currentPage}
        previous={(page: number) => console.log(page)}
        hasNextPage={data.hasNextPage}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
