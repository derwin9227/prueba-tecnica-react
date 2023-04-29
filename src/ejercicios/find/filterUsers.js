const filterUsers = (age, userList) => {
    const list = userList.filter(user => user.dob.age > age);
    return list
}

export default filterUsers