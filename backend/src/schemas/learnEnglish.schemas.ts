import * as mongoose from 'mongoose';

export const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});


//isDraft
export const grammerLessonSchema = new mongoose.Schema({
  title: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  content: String,
  created: {
    type: Date,
    default: Date.now,
  },
  Isdraft:{
    type:Boolean,
    default:false
  }
});

export const essaySchema = new mongoose.Schema({
  title: String,
  content: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

export const pastPaperSchema = new mongoose.Schema({
  name: String,
  paper: String,
  answers: String,
  created: {
    type: Date,
    default: Date.now,
  },
  Isdraft:{
    type:Boolean,
    default:false
  }
  
});

//isDraft

export const vocabularySchema = new mongoose.Schema({
  title: String,
  content: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VocabularyCategory',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  Isdraft:{
    type:Boolean,
    default:false
  }
});


export const vocabularyCategorySchema = new mongoose.Schema({
  name: String,
  description: String,
});