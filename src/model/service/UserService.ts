import { FakeData } from "../../util/FakeData";
import { LoginRequest } from "../net/request/LoginRequest";
import { LoginResponse } from "../net/response/LoginResponse";

export function login(event: LoginRequest){
    if(event.username == null){
        throw new Error("[Bad Request] Missing a username");
    } else if(event.password == null) {
        throw new Error("[Bad Request] Missing a password");
    }
    let fakeData = FakeData.instance;
    let loginResponse = new LoginResponse(true, fakeData.firstUser, fakeData.authToken);
    return loginResponse;
}