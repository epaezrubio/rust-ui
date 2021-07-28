import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps, getButtonHtml } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'link'] },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return createButton(args);
};

const primaryProps: ButtonProps = {
  style: 'primary',
  label: 'Primary button',
};
export const Primary = Template.bind({});
Primary.args = primaryProps;
Primary.parameters = {
  docs: {
    source: {
      code: getButtonHtml(primaryProps)
    },
  },
};

const secondaryProps: ButtonProps = {
  style: 'secondary',
  label: 'Secondary button',
};
export const Secondary = Template.bind({});
Secondary.args = secondaryProps;
Secondary.parameters = {
  docs: {
    source: {
      code: getButtonHtml(secondaryProps)
    }
  }
};

const successProps: ButtonProps = {
  style: 'success',
  label: 'Success button',
};
export const Success = Template.bind({});
Success.args = successProps;
Success.parameters = {
  docs: {
    source: {
      code: getButtonHtml(successProps)
    }
  }
};

const dangerProps: ButtonProps = {
  style: 'danger',
  label: 'Danger button',
};
export const Danger = Template.bind({});
Danger.args = dangerProps;
Danger.parameters = {
  docs: {
    source: {
      code: getButtonHtml(dangerProps)
    }
  }
};

const linkProps: ButtonProps = {
  style: 'link',
  label: 'Link button',
};
export const Link = Template.bind({});
Link.args = linkProps;
Link.parameters = {
  docs: {
    source: {
      code: getButtonHtml(linkProps)
    }
  }
};