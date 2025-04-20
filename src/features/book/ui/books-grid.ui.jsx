import { BookCard } from './book-card.ui';

export const BooksGrid = ({ booksData }) => {
    return (
		<div className='container-center'>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				<BookCard />
				{booksData?.map((bookItem) => (
					<BookCard bookItem={bookItem} />
				))}
			</div>
			
		</div>
    );
};
