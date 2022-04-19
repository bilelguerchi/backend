class APIFeatures {

constructor(query,queryStr){
this.query =query;
this.queryStr =queryStr ;

}

search(){
    const Keyword = this.queryStr.Keyword ? {

name:{
    $regex:this.queryStr.Keyword,
    $options : 'i',

}

    }:{}


    this.query= this.query.find({ ...Keyword})
    return this ;
}

}

module.exports = APIFeatures ;