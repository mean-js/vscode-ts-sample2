import {User} from '../user/user';

export class PersonDao {
    private static instance = new PersonDao();

    public static getInstance():PersonDao {
        return PersonDao.instance;
    }

    public sayHello():string {
        return "Hello Krrrish!!!";
    }

    public sayObject():any {
        return {"firstName" : "Krrish", "city" : "PATNA"};
    }

    public sayUser():User {
        let pojo = new User(111, 'abcd', 'xyz');
        return pojo;
    }
}