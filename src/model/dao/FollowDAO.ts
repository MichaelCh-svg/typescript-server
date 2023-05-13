import { FakeData } from "../../util/FakeData";
import { User } from "../domain/User";

export function getDAOFollowees(followerAlias: String | null, limit: number, lastFolloweeAlias: String | null) : [User[], boolean] {
    
    let fakeData = FakeData.instance;
    let allFollowees = fakeData.fakeUsers;

    let followeesIndex = lastFolloweeAlias == null ? 0 : allFollowees.findIndex(user => user.alias == lastFolloweeAlias);
    let length = allFollowees.length;
    let remainingFolloweesCount = length - followeesIndex;

    let responseFollowees = allFollowees.splice(followeesIndex, followeesIndex + remainingFolloweesCount);
    let hasMorePages = remainingFolloweesCount > limit;
    return [responseFollowees, hasMorePages];
}