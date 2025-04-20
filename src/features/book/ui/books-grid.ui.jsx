import { BookCard } from './book-card.ui';

export const BooksGrid = ({ booksData }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <BookCard />
            {booksData?.map((bookItem) => (
                <BookCard bookItem={bookItem} />
            ))}
        </div>
    );
};
