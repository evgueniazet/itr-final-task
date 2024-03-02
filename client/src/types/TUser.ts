export type TUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  blocked: boolean;
};
