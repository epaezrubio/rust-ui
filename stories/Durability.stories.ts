import { Story, Meta } from '@storybook/html';
import { createDurability, getDurabilityHtml, DurabilityProps } from './Durability';

export default {
  title: 'Components/Durability',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    valueLabel: { control: 'text' }
  },
} as Meta;

const Template: Story<DurabilityProps> = (args: DurabilityProps) => {
  return createDurability(args);
};

const baseProps : DurabilityProps = {
  min: 0,
  max: 150,
  value: 100
};
export const Base = Template.bind({});
Base.args = baseProps;
Base.parameters = {
  docs: {
    source: {
      code: getDurabilityHtml({})
    },
  },
};

const withLabelProps : DurabilityProps = {
  min: 0,
  max: 1000,
  value: 830,
  valueLabel: 'Durability'
};
export const WithLabel = Template.bind({});
WithLabel.args = withLabelProps;
WithLabel.parameters = {
  docs: {
    source: {
      code: getDurabilityHtml(withLabelProps)
    },
  },
};