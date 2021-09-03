import { Story, Meta } from '@storybook/html';
import { createCursor, CursorProps, getCursorHtmlAndScript } from './Cursor';

export default {
  title: 'Components/Cursor',
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<CursorProps> = (args: CursorProps) => {
  return createCursor(args);
};

const basicCursorProps : CursorProps = { label: 'Open' };
export const Basic = Template.bind({});
Basic.args = basicCursorProps;
Basic.parameters = {
  docs: {
    source: {
      code: getCursorHtmlAndScript(basicCursorProps)
    },
  },
};

const withIconCursorProps : CursorProps = { icon: 'outbox', label: 'Open' };
export const WithIcon = Template.bind({});
WithIcon.args = withIconCursorProps;
WithIcon.parameters = {
  docs: {
    source: {
      code: getCursorHtmlAndScript(withIconCursorProps)
    },
  },
};