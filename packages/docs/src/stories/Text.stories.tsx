import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae iure eos assumenda perspiciatis officia hic animi vitae, quam sit asperiores necessitatibus numquam enim minima non accusamus cumque commodi deserunt.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text tag',
    as: 'strong',
  },
}

// TODO: rodar o npm run dev no projeto react e no storybook
