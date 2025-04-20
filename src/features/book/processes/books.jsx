import { BookService } from '../services/books.service';
import { BooksGrid } from '../ui/books-grid.ui';


const getBooks = async () => {
	try {
		const booksData = await BookService.getAll()
		return booksData;
	} catch (error) {
		console.error(error);
	}
}

export const AllBooks = async () => {
	const booksData = await getBooks();

	return (
		<BooksGrid booksData={booksData}/>
	)
}