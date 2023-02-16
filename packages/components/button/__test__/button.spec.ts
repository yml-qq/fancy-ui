import FaButton from "../src/button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("FaButton", () => {
  test("default FaButton", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      }
    });

    expect(wrapper.text()).toBe("Button");
  });
});

describe("Button type", () => {
  test("default", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      },
      props: {
        type: "default"
      }
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace("\n", ""))
        .includes("fa-button-default")
    ).toBe(true);
  });
  test("primary", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      },
      props: {
        type: "primary"
      }
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace("\n", ""))
        .includes("fa-button-primary")
    ).toBe(true);
  });
  test("success", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      },
      props: {
        type: "success"
      }
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace("\n", ""))
        .includes("fa-button-success")
    ).toBe(true);
  });
  test("warning", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      },
      props: {
        type: "warning"
      }
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace("\n", ""))
        .includes("fa-button-warning")
    ).toBe(true);
  });
  test("danger", () => {
    const wrapper = shallowMount(FaButton, {
      slots: {
        default: "Button"
      },
      props: {
        type: "danger"
      }
    });
    expect(
      wrapper
        .classes()
        .map(v => v.replace("\n", ""))
        .includes("fa-button-danger")
    ).toBe(true);
  });
});
