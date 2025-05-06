import ExploreTrending from "@/components/explore/ExploreTrending";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Explore/ExploreTrending",
  component: ExploreTrending,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hashes: [
      {
        hash: "Cafe",
        count: 2,
      },
      {
        hash: "Fandangos",
        count: 1,
      },
    ],
  },
};

export const MoreThan2: Story = {
  args: {
    hashes: [
      {
        hash: "Cafe",
        count: 2,
      },
      {
        hash: "Fandangos",
        count: 1,
      },
      { hash: "LLuvia", count: 0 },
    ],
  },
};

export const Empty: Story = {
  args: {
    hashes: [],
  },
};
