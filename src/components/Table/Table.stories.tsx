import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Main: Story = {
  args: {
    data: [
      {
        id: 187,
        title: "slug sera que é",
        slug: "slug-sera-que-e",
        published_at: "2023-10-23T01:16:02.000000Z",
        created_at: "2023-10-23T19:46:01.000000Z",
        updated_at: "2023-10-23T19:46:01.000000Z",
      },
      {
        id: 186,
        title: "slug sera que é",
        slug: "slug-sera-que-e",
        published_at: "2023-10-23T01:16:02.000000Z",
        created_at: "2023-10-23T19:45:57.000000Z",
        updated_at: "2023-10-23T19:45:57.000000Z",
      },
      {
        id: 185,
        title: "slug sera que é",
        slug: "slug-sera-que-e",
        published_at: "2023-10-23T01:16:02.000000Z",
        created_at: "2023-10-23T19:41:39.000000Z",
        updated_at: "2023-10-23T19:41:39.000000Z",
      },
      {
        id: 184,
        title: "Adição TESTADA",
        slug: "adicao-testada",
        published_at: "2023-10-23T06:00:00.000000Z",
        created_at: "2023-10-23T19:32:15.000000Z",
        updated_at: "2023-10-23T19:32:34.000000Z",
      },
      {
        id: 181,
        title: "rxrxfrrx",
        slug: "rxrxfrrx",
        published_at: "2023-10-23T01:16:02.000000Z",
        created_at: "2023-10-23T19:19:46.000000Z",
        updated_at: "2023-10-23T19:19:46.000000Z",
      },
      {
        id: 180,
        title: "rxrxfrrx",
        slug: "rxrxfrrx",
        published_at: "2023-10-23T01:16:02.000000Z",
        created_at: "2023-10-23T19:18:30.000000Z",
        updated_at: "2023-10-23T19:18:30.000000Z",
      },
    ],
  },
};
