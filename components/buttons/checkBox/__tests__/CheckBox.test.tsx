import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { CustomCheckbox } from "../Checkbox";
import { useThemeColor } from "@/hooks/useThemeColor";

// Mock the theme hook
jest.mock("@/hooks/useThemeColor", () => ({
  useThemeColor: jest.fn(),
}));

jest.mock("@expo/vector-icons/Ionicons", () => "Ionicons");


describe("CustomCheckbox Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    (useThemeColor as jest.Mock)
      .mockImplementation((_, colorName) => colorName);

    const { getByRole } = render(<CustomCheckbox isChecked={false} onPress={jest.fn()} />);

    expect(getByRole("button")).toBeTruthy();
  });

  it("should apply correct styles when checked", () => {

    const secondary = useThemeColor({}, 'secondary');
    const contrast = useThemeColor({}, 'contrast');
    const fontContrast = useThemeColor({}, 'fontContrast');

    (useThemeColor as jest.Mock)
      .mockImplementation((_, colorName) => {
        if(colorName === "fontContrast") {
          return fontContrast
        }

        if(colorName === "contrast") {
          return contrast
        }

        if(colorName === "secondary") {
          return secondary
        }

        return "unknown";
      });

    const { getByRole } = render(<CustomCheckbox isChecked={true} onPress={jest.fn()} />);
    const button = getByRole("button");

    expect(button.props.style.borderColor).toBe(contrast);
    expect(button.props.style.backgroundColor).toBe(contrast);
  });

  it("should apply correct styles when unchecked", () => {

    const secondary = useThemeColor({}, 'secondary');
    const contrast = useThemeColor({}, 'contrast');
    const fontContrast = useThemeColor({}, 'fontContrast');

    (useThemeColor as jest.Mock)
      .mockImplementation((_, colorName) => {
        if(colorName === "fontContrast") {
          return fontContrast
        }

        if(colorName === "contrast") {
          return contrast
        }

        if(colorName === "secondary") {
          return secondary
        }

        return "unknown";
      });

    const { getByRole } = render(<CustomCheckbox isChecked={false} onPress={jest.fn()} />);
    const button = getByRole("button");

    expect(button.props.style.borderColor).toBe(secondary);
    expect(button.props.style.backgroundColor).toBe("transparent");
  });

  it("should call onPress when clicked", () => {
    const onPressMock = jest.fn();

    const { getByRole } = render(<CustomCheckbox isChecked={false} onPress={onPressMock} />);
    const button = getByRole("button");

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
