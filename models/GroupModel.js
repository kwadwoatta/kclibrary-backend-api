const {Group} = require('./schema/GroupSchema')

const addGroup = ({name, members}) => {
    return Group.findOne({name}).then(result  => {
        if (result === [] || result === null) {
           let group = new Group({name, members})
            group.save()
            .then(grp => {
                Promise.resolve(grp)
            }).catch(error => {
                Promise.reject(error)
            }); 
        }
    })  
};

const editGroup = ({name, members}) => {
   
    if (members !== undefined && members.length !== 0) {
        let groupArray = []
       return  Group.findOne({name})
                .then(grp => {
                    if (grp !== undefined) {
                        groupArray = grp.members

                        for (i = 0; i < members.length; i++) {
                            if (!groupArray.includes(members[i])) {
                                groupArray.push(members[i])
                            }
                        }
                    } 

            Group.findOneAndReplace({name}, { name, members: groupArray })
            .then(group => {
                Promise.resolve(group)
            }).catch(error => {
                Promise.reject(error)
            });
        }).catch(err => {
            console.log(err)
        }) 
    }
};

const deleteGroup = ({name}) => {
    return Group.findOneAndDelete({name})
        .then(group => {
        Promise.resolve(group)
    }).catch(error => {
        Promise.reject(error)
    }); 
};

const deleteGroupMember = ({name, member}) => {
    return Group.findOne({name})
        .then(group => {
            let grp
            for (i = 0; i < group.members.length; i++) {
                grp = group.members.filter(person =>  person.name !== member )
            }

            Group.findOneAndReplace({name}, {name, members: grp}).then(updatedGroup => {
                Promise.resolve(updatedGroup)
            })
            .catch(error => {
                Promise.reject(error)
            }); 
            
        })
        .catch(error => {
            Promise.reject(error)
        }); 
};

module.exports = {
    addGroup,
    editGroup,
    deleteGroup,
    deleteGroupMember
}