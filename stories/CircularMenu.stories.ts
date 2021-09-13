import { Story, Meta } from '@storybook/html';

import { MenuProps, createMenu, getMenuHtmlAndScript } from './CircularMenu';

export default {
  title: 'Components/Right Click Menu',
  argTypes: {
    items: { type: 'number', min: 0, max: 13 }
  },
} as Meta;

const Template: Story<MenuProps> = (args: MenuProps) => {
  return createMenu(args);
};

const menuProps : MenuProps = { items: 13, height: 600, width: 600 };
export const CircularMenu = Template.bind({});
CircularMenu.args = menuProps;
CircularMenu.parameters = {
  docs: {
    source: {
      code: getMenuHtmlAndScript(menuProps)
    },
  },
};