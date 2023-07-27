import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import videoSrc from "$assets/demoswing.mp4";

import { Video } from "./analyzer";

describe("Video", () => {
  test("renders without crashing", () => {
    const { container } = render(<Video src={videoSrc} />);

    expect(container).toBeDefined();
  });
});