import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="any status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("any status");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="any status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="any status" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test("after creation <span> should contain a correct status", () => {
    const component = create(<ProfileStatus status="any status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('any status');
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="any status" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('any status');
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="any status" updateStatus={mockCallback} />);
    const instanse = component.getInstance();
    instanse.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});