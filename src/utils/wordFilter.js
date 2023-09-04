class WordFilter{

    static verify(data){
        
        let badWorld = {
            "palmeiras": 'P********',
        }

        let text = data.content.split(' ')
        for(let i = 0 ; i < text.length ; i++){
            let word = text[i]
            if(badWorld[word]){
                text[i] = badWorld[word]
            }

        }
        return {
            ...data,
            content: text.join(' ')
        }
    }
}

export{WordFilter}