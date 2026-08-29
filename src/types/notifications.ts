export interface InotificationsCreateNotificationRequest {
  message?: string;
  title?: string;
  user_id?: number;
}

export interface InotificationsNotificationResponse {
  created_at?: string;
  id?: number;
  is_read?: boolean;
  message?: string;
  title?: string;
}

export interface InotificationsUpdateNotificationRequest {
  message?: string;
  title?: string;
}

