const Maiden = require('../models/maidenModels')

class rozenController {

    async findAll(){
        try {
            return await Maiden.find().lean();
        } catch (error) {
            throw error            
        }
    }

    async create(Muñeca){
        try {
            return await Maiden.create(Muñeca);
        } catch (error) {
            throw error            
        }
    }


    async delete(id){
        try {
            return await Maiden.findByIdAndDelete(id);
        } catch (error) {
            throw error            
        }
    }


    async update(id){
        try {
            return await Maiden.findByIdAndUpdate(id);
        } catch (error) {
            throw error            
        }
    }


}

module.exports = new rozenController;
