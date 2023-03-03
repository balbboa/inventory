export interface IUserRegister {
  id?: number;
  name: string;
  serviceTypeId: string;
}

export interface IUserRequest {
  lenght: number;
  users: IUserRegister[];
}

export default function empty() {
  return "";
}
