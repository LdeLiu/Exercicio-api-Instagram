class PostRepository{
    constructor(model){
        this.model = model;
    }

    create(data){
        return this.model.create(data)
    }

    findById(_id){
        return this.model.findOne({_id})
    }

    addLike(_id,like, addCount ){
        return this.model.findOneAndUpdate({_id},{likeCount: addCount ,$push: {likes: like}})
    }

    findAllById(id){
        return this.model.find({user: id})
    }

    updateLikeList(idPost, idLike, downCount){
        return this.model.findOneAndUpdate({_id: idPost}, {likeCount: downCount, $pull: {likes: idLike}})
    }

    delete(_id){
        return this.model.deleteOne({_id})
    }
}

export {PostRepository}