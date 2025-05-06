

import UserTabs from "@/components/users/UserTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "User/UserTabs",
  component: UserTabs,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
  {
    name: "Keben Shelby",
    username: "kebenshelby",
    message: "Te tengo que hacer la leche?",
    repliesCount: 13,
  },
  {
    name: "Mayza Shelby",
    username: "illomayza",
    message: "No hay opción",
    repliesCount: 2,
  },
];
const replies = [
  {
    name: "Keben Shelby",
    username: "kebenshelby",
    message: "Fandangos",
    repliesCount: 13,
  },
  {
    name: "Mayza Shelby",
    username: "illomayza",
    message: "Si",
    repliesCount: 2,
  },
];

export const MessageTab: Story = {
  args: {
    messages: messages,
    replies: replies,
  },
};
