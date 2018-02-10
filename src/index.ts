import {UserDao} from './user/user.dao';

class Main {
    public static main(): void{
        let userDaoInsance = UserDao.getInstance();

        let userRef = userDaoInsance.getUser();
        let userList = userDaoInsance.getUserList();

        console.log(userRef);
        console.log(userList);
    }
}

Main.main();