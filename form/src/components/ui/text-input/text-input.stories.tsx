import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {
    placeholder: 'Basic TextInput',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <TextInput size="xs" placeholder="Extra small" />
      <TextInput size="sm" placeholder="Small" />
      <TextInput size="md" placeholder="Medium" />
      <TextInput size="lg" placeholder="Large" />
      <TextInput size="xl" placeholder="Extra large" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <TextInput placeholder="Radius xs" radius="xs" />
      <TextInput placeholder="Radius sm" radius="sm" />
      <TextInput placeholder="Radius md" radius="md" />
      <TextInput placeholder="Radius lg" radius="lg" />
      <TextInput placeholder="Radius xl" radius="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <TextInput variant="default" placeholder="Default variant" />
      <TextInput variant="filled" placeholder="Filled variant" />
      <TextInput variant="unstyled" placeholder="Unstyled variant" />
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: 'Required field',
    required: true,
    placeholder: 'Required textarea',
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Search...',
    leftSection: <span>🔍</span>,
    rightSection: <span>✔️</span>,
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Email address',
    description: 'We’ll never share your email.',
    placeholder: 'you@example.com',
    leftSection: <span>✔️</span>,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    error: 'This field is required',
    required: true,
  },
};
