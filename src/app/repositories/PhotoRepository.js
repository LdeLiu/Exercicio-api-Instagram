class PhotoRepository{
    constructor(model){
        this.model = model;
    }

    create(data){
        return this.model.create(data)
    }
}

export {PhotoRepository}