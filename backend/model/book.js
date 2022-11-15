import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    year: Number,
    copies: Number
});

autoIncrement.initialize(mongoose.connection);
bookSchema.plugin(autoIncrement.plugin, 'book');
// we need to turn it into a model
const postBook = mongoose.model('book', bookSchema);

export default postBook;