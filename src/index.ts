import {UserDao} from './user/user.dao';
import {PersonDao} from './person/person.dao';
import {EmployeeDao} from './employee/employee.dao';
import {ProfessorDao} from './professor/professor.dao';

class Main {
    public static main(): void{
        let userDaoInsance = UserDao.getInstance();
        let personDaoinstance = PersonDao.getInstance();
        let employeeDaoIntance = EmployeeDao.getInsance();

        // USER MODULE
        let userRef = userDaoInsance.getUser();
        let userList = userDaoInsance.getUserList();
        console.log(userRef);
        console.log(userList);

        // PERSON MODULE
        console.log(personDaoinstance.sayHello());
        console.log(personDaoinstance.sayObject());
        console.log(personDaoinstance.sayUser());

        // EMPLOYEE MODULE
        console.log(employeeDaoIntance.sayhello());

        console.log(ProfessorDao.sayHello());
    }
}

Main.main();