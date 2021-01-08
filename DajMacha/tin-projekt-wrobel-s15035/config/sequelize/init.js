const sequelize = require('./sequelize');

const Employee = require('../../model/sequelize/Cart');
const Department = require('../../model/sequelize/OrderStatus');
const Employment = require('../../model/sequelize/Product');
const Employee = require('../../model/sequelize/UserOrder');
const Department = require('../../model/sequelize/UserRole');
const Employment = require('../../model/sequelize/WebUser');

module.exports = () => {
   /* Employee.hasMany(Employment, { as: 'employments', foreignKey: { name: 'emp_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Employment.belongsTo(Employee, { as: 'employee', foreignKey: { name: 'emp_id', allowNull: false } });
    Department.hasMany(Employment, { as: 'employments', foreignKey: { name: 'dept_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Employment.belongsTo(Department, { as: 'department', foreignKey: { name: 'dept_id', allowNull: false } });*/


    Product.hasMany(Cart, { as: 'carts', foreignKey: { name: 'id_product', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Cart.belongsTo(Product, { as: 'products', foreignKey: { name: 'id_product', allowNull: false } });

    UserOrder.hasMany(Cart, { as: 'carts', foreignKey: { name: 'id_order', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Cart.belongsTo(UserOrder, { as: 'userOrders', foreignKey: { name: 'id_order', allowNull: false } });

    OrderStatus.hasMany(UserOrder, { as: 'userOrders', foreignKey: { name: 'id_order_status', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    UserOrder.belongsTo(OrderStatus, { as: 'orderStatuses', foreignKey: { name: 'id_order_status', allowNull: false } });

    WebUser.hasMany(UserOrder, { as: 'userOrders', foreignKey: { name: 'id_user', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    UserOrder.belongsTo(WebUser, { as: 'webUsers', foreignKey: { name: 'id_user', allowNull: false } });

    UserRole.hasMany(WebUser, { as: 'webUsers', foreignKey: { name: 'id_user_role', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    WebUser.belongsTo(UserRole, { as: 'userRoles', foreignKey: { name: 'id_user_role', allowNull: false } });

/*
    let allProducts, allUserOrders, allOrderStatuses, allWebUsers, allUserRoles, all; ???????????????????????????
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Employee.findAll();
        })
        .then(emps => {
            if (!emps || emps.length == 0) {
                return Employee.bulkCreate([
                    { firstName: 'Jan', lastName: 'Kowalski', email: 'jan.kowalski@acme.com' },
                    { firstName: 'Adam', lastName: 'Zieliñski', email: 'adam.zielinski@acme.com' },
                    { firstName: 'Marian', lastName: 'Nowak', email: 'marian.nowak@acme.com' },
                ])
                    .then(() => {
                        return Employee.findAll();
                    });
            } else {
                return emps;
            }
        })
        .then(emps => {
            allEmps = emps;
            return Department.findAll();
        })
        .then(depts => {
            if (!depts || depts.length == 0) {
                return Department.bulkCreate([
                    { name: 'HR', budget: 500_000 },
                    { name: 'Sales', budget: 2_000_000 }
                ])
                    .then(() => {
                        return Employee.findAll();
                    });
            } else {
                return depts;
            }
        })
        .then(depts => {
            allDepts = depts;
            return Employment.findAll();
        })
        .then(empls => {
            if (!empls || empls.length == 0) {
                return Employment.bulkCreate([
                    { emp_id: allEmps[0]._id, dept_id: allDepts[0]._id, salary: 5000, dateFrom: '2001-01-01', dateTo: '2009-01-01' },
                    { emp_id: allEmps[1]._id, dept_id: allDepts[0]._id, salary: 4000, dateFrom: '2001-02-01', dateTo: '2009-02-01' },
                    { emp_id: allEmps[0]._id, dept_id: allDepts[1]._id, salary: 3000, dateFrom: '2009-01-02', dateTo: null }
                ]);
            } else {
                return empls;
            }
        });*/
};