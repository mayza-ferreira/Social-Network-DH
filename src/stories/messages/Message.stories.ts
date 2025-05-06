import Message from "@/components/messages/Message";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Messages/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: {
      message: "Mensaje de prueba",
      name: "Keben Shelby",
      username: "kebenshelby",
    },
  },
};
