import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import videoSrc from "../../assests/demoswing.mp4";
import { Analyzer } from "./analyzer";

describe("Video", () => {
  test("renders without crashing", () => {
    const { container } = render(<Analyzer src={videoSrc} />);

    expect(container).toBeDefined();
  });
});
