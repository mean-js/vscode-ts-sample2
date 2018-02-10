import {UserDao} from './user/user.dao';
import {PersonDao} from './person/person.dao';

class Main {
    public static main(): void{
        let userDaoInsance = UserDao.getInstance();
        let personDaoinstance = PersonDao.getInstance();

        let userRef = userDaoInsance.getUser();
        let userList = userDaoInsance.getUserList();

        console.log(userRef);
        console.log(userList);

        console.log(personDaoinstance.sayHello());
        console.log(personDaoinstance.sayObject());
        console.log(personDaoinstance.sayUser());
    }
}

Main.main();