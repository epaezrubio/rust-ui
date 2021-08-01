import { Story, Meta } from '@storybook/html';
import { getNotificationHtml, NotificationProps } from './Notification';
import { getStatusHtml, StatusProps } from './Status';

export default {
  title: 'Example/Status',
  argTypes: {},
} as Meta;

const FeaturesTemplate: Story<StatusProps> = (args: StatusProps) : string => {
  return getStatusHtml(args);
};

const statusProps : StatusProps = {
  style: 'success',
  icon: 'add',
  min: 0,
  max: 100,
  value: 75
};
export const Feature = FeaturesTemplate.bind({});
Feature.args = statusProps;
Feature.argTypes = {
  style: {
    control: { type: 'select', options: ['success', 'info', 'warning', 'danger'] },
  },
};
Feature.parameters = {
  docs: {
    source: {
      code: getStatusHtml(statusProps)
    },
  },
};

const NotificationsTemplate: Story<StatusProps> = (args: StatusProps) : string => {
  return getNotificationHtml(args);
};

const notificationsProps : NotificationProps = {
  icon: 'home',
  label: 'Upkeep time',
  info: '>72 hrs',
  style: 'success',
};
export const Notifications = NotificationsTemplate.bind({});
Notifications.args = notificationsProps;
Notifications.argTypes = {
  style: {
    control: { type: 'select', options: ['success', 'info', 'warning', 'danger'] },
  },
};
Notifications.parameters = {
  docs: {
    source: {
      code: getNotificationHtml(notificationsProps)
    },
  },
};