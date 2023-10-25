import type { Meta, StoryObj } from "@storybook/react";

import { DataView } from "./DataView";

const meta = {
  title: "Components/DataView",
  component: DataView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataView>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Main: Story = {
  args: {
    post: {
      id: 10,
      title: "test",
      seo_title: "test",
      tags: "test, test",
      seo_tags: "test, test",
      text_primary: "test",
      text_secondary: "test",
      youtube_link: "https://youtube.com",
      published_at: "10/10/2023, 10:10",
      featured_until: "10/10/23, 10:10",
    },
  },
};
