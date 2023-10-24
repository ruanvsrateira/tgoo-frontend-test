import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "./SearchInput";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Main: Story = {
  args: {
    label: "Label Exemplo",
    value: "",
  },
};
