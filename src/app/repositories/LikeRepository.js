class LikeRepository{
    constructor(model){
        this.model = model;
    }

    create(data){
        return this.model.create(data)
    }

    findAll(){
        return this.model.find({})
    }
    findLike(array){
        return this.model.find({_id: {$in: array}})
    }

    delete(_id){
        return this.model.findOneAndDelete({_id})
    }

    deleteByPost(_id,likeList){
        return this.model.deleteMany({_id: {$in : likeList}})
    }
}

export {LikeRepository}