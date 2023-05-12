import { LoginResponse } from "../model/net/response/loginResponse"
import { FakeData } from "../util/FakeData";

export const handler = async(event: any) => {
    // TODO implement
    let fakeData = FakeData.instance;
    let loginResponse = new LoginResponse(fakeData.firstUser, null);
    return loginResponse;
};