import { Story, Meta } from '@storybook/html';
import { Items } from '../lib/items';
import { createCursor, CursorProps, getCursorHtmlAndScript } from './Cursor';
import { itemsControl } from './items';

export default {
  title: 'Components/Cursor',
  argTypes: {
    label: { control: 'text' },
    image: itemsControl
  },
} as Meta;

const Template: Story<CursorProps> = (args: CursorProps) => {
  return createCursor(args);
};

const basicCursorProps : CursorProps = { label: 'Open', image: Items.BOX_WOODEN_LARGE  };
export const Basic = Template.bind({});
Basic.args = basicCursorProps;
Basic.parameters = {
  docs: {
    source: {
      code: getCursorHtmlAndScript(basicCursorProps)
    },
  },
};

const withIconCursorProps : CursorProps = { icon: 'outbox', label: 'Open', image: Items.BOX_WOODEN_LARGE };
export const WithIcon = Template.bind({});
WithIcon.args = withIconCursorProps;
WithIcon.parameters = {
  docs: {
    source: {
      code: getCursorHtmlAndScript(withIconCursorProps)
    },
  },
};