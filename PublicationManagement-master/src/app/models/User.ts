export class User {
  user_id: number;
  user_email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
}

export class UserDetail {
  user_id: number;
  department_id: number;
}
