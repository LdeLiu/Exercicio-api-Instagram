class UserRepository{
    constructor(model){
        this.model = model;
    }

    create(data){
        return this.model.create(data)
    }

    findByEmail(email){
        return this.model.findOne({email})
    }

    findById(id){
        return this.model.findOne({_id: id})
    }

    updateData(id,data){
        return this.model.findByIdAndUpdate(id,{...data})
    }

    updatePhoto(id,data){
        return this.model.findByIdAndUpdate(id,{photo: data})
    }

    updatePosts(id,data){
        return this.model.findByIdAndUpdate(id,{$push: {posts: data}})
    }
}

export {UserRepository}