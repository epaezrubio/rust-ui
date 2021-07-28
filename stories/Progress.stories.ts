import { Story, Meta } from '@storybook/html';
import { createProgress, getProgressHtml, ProgressProps } from './Progress';

export default {
  title: 'Example/Progress',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    lightValue: { control: 'number' },
    style: {
      control: { type: 'select', options: ['success', 'info', 'warning', 'danger'] },
    },
  },
} as Meta;

const Template: Story<ProgressProps> = (args: ProgressProps) => {
  return createProgress(args);
};

const successProps : ProgressProps = {
  style: 'success',
};
export const Success = Template.bind({});
Success.args = successProps;
Success.parameters = {
  docs: {
    source: {
      code: getProgressHtml(successProps)
    },
  },
};

const infoProps : ProgressProps = {
  style: 'info',
};
export const Info = Template.bind({});
Info.args = infoProps;
Info.parameters = {
  docs: {
    source: {
      code: getProgressHtml(infoProps)
    },
  },
};

const warningProps : ProgressProps = {
  style: 'warning',
};
export const Warning = Template.bind({});
Warning.args = warningProps;
Warning.parameters = {
  docs: {
    source: {
      code: getProgressHtml(warningProps)
    },
  },
};

const dangerProps : ProgressProps = {
  style: 'danger',
};
export const Danger = Template.bind({});
Danger.args = dangerProps;
Danger.parameters = {
  docs: {
    source: {
      code: getProgressHtml(dangerProps)
    },
  },
};
