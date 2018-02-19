export class EmployeeDao {

    static instance = new EmployeeDao();

    static getInsance() {
        return EmployeeDao.instance;
    }

    sayhello() {
        return "Hello Worldd";
    }
};