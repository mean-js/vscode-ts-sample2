import {User} from './user';

export class UserDao {
    private static userDaoInstance = new UserDao();

    public static getInstance():UserDao {
        return UserDao.userDaoInstance;
    }

    public getUser():User {
        try{
            let userRef = new User(1, 'Affixus', 'Systems Pvt Ltd');

            return userRef;
        }catch(err){
            throw err;    
        }
    }


    public getUserList():User[]{
        try{
            let userList:User[] = [];

            for(let i=0; i<10; i++) {
                let newPojo = new User(i, "PATNA" + i, 'MUMBAI' + i);
                userList.push(newPojo);
            }

            return userList;
        }catch(err){
            throw err;
        }
    }
};