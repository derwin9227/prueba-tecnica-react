
const sortUsers = user => {
    const sortUsers = user.sort((a,b) => {
        if(a.name.first > b.name.first)
            return 1;
        if(a.name.first < b.name.first)
            return -1
        return 0;
    });   
    return sortUsers;
}

export default sortUsers;