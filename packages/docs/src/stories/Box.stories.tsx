import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@thiago-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: <Text>Testando o elemento Box com tag main</Text>,
    as: 'main',
  },
}
