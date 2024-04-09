import { render } from "@testing-library/react";
import Count from "./Count";

describe(Count, () => {
  it("counter displays correct initial count ", () => {
    const { getByTestId } = render(<Count initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });
});
