import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './password-input';

const meta: Meta<typeof PasswordInput> = {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Basic: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <PasswordInput size="xs" placeholder="Extra small" />
      <PasswordInput size="sm" placeholder="Small" />
      <PasswordInput size="md" placeholder="Medium" />
      <PasswordInput size="lg" placeholder="Large" />
      <PasswordInput size="xl" placeholder="Extra large" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <PasswordInput placeholder="Radius xs" radius="xs" />
      <PasswordInput placeholder="Radius sm" radius="sm" />
      <PasswordInput placeholder="Radius md" radius="md" />
      <PasswordInput placeholder="Radius lg" radius="lg" />
      <PasswordInput placeholder="Radius xl" radius="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <PasswordInput variant="default" placeholder="Default variant" />
      <PasswordInput variant="filled" placeholder="Filled variant" />
      <PasswordInput variant="unstyled" placeholder="Unstyled variant" />
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
    placeholder: 'Enter your password',
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Enter your password',
    leftSection: '🙈',
    rightSection: '👀',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Account password',
    description: 'Must contain at least 8 characters',
    placeholder: 'Create a password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters',
  },
};

export const VisibilityToggle: Story = {
  args: {
    label: 'Password with toggle',
    placeholder: 'Enter your password',
    defaultVisible: true,
  },
};

export const CustomToggleIcon: Story = {
  args: {
    label: 'Password with custom toggle',
    placeholder: 'Enter your password',
    visibilityToggleIcon: ({ reveal }) => (
      <span style={{ fontFamily: 'monospace' }}>{reveal ? '🙈' : '👀'}</span>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled password input',
    value: 'secret123',
    disabled: true,
  },
};
