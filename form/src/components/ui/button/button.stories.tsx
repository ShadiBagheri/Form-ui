import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="light">Light</Button>
      <Button variant="default">Default</Button>
      <Button variant="white">White</Button>
      <Button variant="transparent">Transparent</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button color="primary">Primary</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button loading>Submit</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<span>➕</span>}>Add Item</Button>
      <Button endIcon={<span>➡️</span>}>Next</Button>
      <Button startIcon={<span>🔔</span>} />
    </div>
  ),
};

export const SpecialCases: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
        width: 400,
      }}
    >
      <Button fullWidth>Full Width Button (container size: 400px)</Button>
    </div>
  ),
};

export const FilledButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button variant="filled" color="primary">
        Primary
      </Button>
      <Button variant="filled" color="neutral">
        Neutral
      </Button>
      <Button variant="filled" color="success">
        Success
      </Button>
      <Button variant="filled" color="error">
        Error
      </Button>
      <Button variant="filled" color="warning">
        Warning
      </Button>
      <Button variant="filled" color="info">
        Info
      </Button>
      <Button variant="filled" disabled>
        Disabled
      </Button>
    </div>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button variant="outline" color="primary">
        Primary
      </Button>
      <Button variant="outline" color="neutral">
        Neutral
      </Button>
      <Button variant="outline" color="success">
        Success
      </Button>
      <Button variant="outline" color="error">
        Error
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
      <Button variant="outline" color="info">
        Info
      </Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  ),
};
