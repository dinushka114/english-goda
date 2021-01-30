
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VOCABULARY_CATEGORY_PROVIDER } from 'src/config/constants/constants';
import { createVocabularyCatDto } from 'src/dtos/learnEnglish.dtos';
import { VocabularyCategory } from 'src/models/lessonModels';

@Injectable()
export class VocabularyCategoryService {
  constructor(
    @Inject(VOCABULARY_CATEGORY_PROVIDER)
    private vocCatModel: Model<VocabularyCategory>,
  ) {}

  async getCategories() {
    const cats = await this.vocCatModel.find({}).exec();
    return cats;
  }

  async createCategory(catData: createVocabularyCatDto) {
    const foundCategory = await this.vocCatModel.findOne({
      name: catData.name.trim(),
    });

    if (foundCategory) {
      throw new HttpException(
        'category already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    // console.log(catData)
    const newCat = await  this.vocCatModel.create(catData);
    return { msg: 'category created' };
  }

  async updateCategory(id: string, catData: createVocabularyCatDto) {
    const foundCat = await this.vocCatModel.findOne({ _id: id });
    console.log(catData);
    if (foundCat) {
    //   const data = {
    //     name: catData.name,
    //     description: catData.description,
    //   };
    //   console.log(data)
      const updatedCat = await this.vocCatModel.findByIdAndUpdate(
        { _id: id },
        catData,
        { new: true },
      );
      return { msg: 'category updated' };
    }
    throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND);
  }

  async deleteCategory(id:string){
    try{
        const deletedCat = await this.vocCatModel.findByIdAndDelete(id);
        return {msg:`${deletedCat.name} deleted`};
    }catch(err){
        throw new HttpException('Category Not Found' , HttpStatus.NOT_FOUND);
    }
    
}
}
