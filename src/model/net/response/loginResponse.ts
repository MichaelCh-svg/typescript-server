import { User } from "../../domain/User"
import { AuthToken } from "../../domain/AuthToken"
export class LoginResponse{
    success = true;
    user: User | null;
    authToken: AuthToken | null;
    constructor(user: User | null, authToken: AuthToken | null){
        this.user = user;
        this.authToken = authToken;
    }
}