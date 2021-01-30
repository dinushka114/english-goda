import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { CATEGORY_PROVIDER } from 'src/config/constants/constants';
import { CreateCategoryDto } from 'src/dtos/learnEnglish.dtos';
import { Category } from 'src/models/lessonModels';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_PROVIDER)
    private categoryModel: Model<Category>,
  ) {}

  async createNew(createCatData: CreateCategoryDto) {
    if (createCatData.name != null || createCatData.name !== undefined) {
      const foundCategory = await this.categoryModel.findOne({
        name: createCatData.name.trim(),
      });
      if (foundCategory) {
        throw new HttpException(
          'category already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      const newCat = await new this.categoryModel(createCatData);
      newCat.save();
      return { msg: 'category created' };
    }
  }

  async getCategories() {
    const categories = await this.categoryModel.find({}).exec();
    return categories;
  }

  async updateCategory(id: string, catData: CreateCategoryDto) {
    const foundCat = await this.categoryModel.findOne({ _id: id });
    if (foundCat) {
      const data = {
        name: catData.name,
        description: catData.description,
      };
      const updatedCat = await this.categoryModel.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true },
      );
      return { msg: 'category updated' };
    }
    throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND);
  }

  async deleteCategory(id: string) {
    try {
      const deletedCat = await this.categoryModel.findByIdAndDelete(id);
      return { msg: `${deletedCat.name} deleted` };
    } catch (err) {
      throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
