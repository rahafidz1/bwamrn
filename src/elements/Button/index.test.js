import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed button if isDisable is present", () => {
    const {container} = render(<Button isDisable></Button>)

    // expect(container.querySelector("span.disabled"));
})