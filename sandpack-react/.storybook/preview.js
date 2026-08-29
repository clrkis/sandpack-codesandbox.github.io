import "./main.css";
import { Analytics } from "@vercel/analytics/react";

export const decorators = [
  (Story) => (
    <>
      <Story />
      <Analytics />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Intro"],
    },
  },
};
