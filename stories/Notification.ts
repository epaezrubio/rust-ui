import '../dist/css/main.css';

export interface NotificationProps {
  style: 'success' | 'info' | 'warning' | 'danger';
  icon?: string;
  label?: string;
  info?: string;
}

export function getNotificationHtml({ style, icon, label, info}: NotificationProps): string {
  return `
  <div class="alert alert-${style}" role="alert">
        <i class="alert-icon material-icons">${icon}</i>
        <div class="alert-text alert-highlight">
            ${label}
        </div>
        <div class="alert-right">${info}</div>
    </div>
  `;
}

export const createNotification = (props: NotificationProps): HTMLElement => {
  const notification = document.createElement('div');
  notification.innerHTML = getNotificationHtml(props);

  return notification.children[0] as HTMLElement;
};
