import { User } from "./User.ts";

export interface UserRepository {
  save(user: User): Promise<void>;
  existsByEmail(email: string): Promise<boolean>;
}
