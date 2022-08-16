import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthButton, { TAuthButton } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';

export default {
  title: 'buttons/AuthButton',
  component: AuthButton,
  argTypes: {},
} as ComponentMeta<typeof AuthButton>;

const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAuthButtonProps.base,
} as TAuthButton;
