import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BOOK_WIDTH = 160; // Width of the book in pixels
const BOOK_HEIGHT = 70; // Height of the book in pixels
const BOOK_SPACING = -135; // Space between books in pixels (adjust this to reduce/increase spacing)
const ROW_HEIGHT = BOOK_HEIGHT + BOOK_SPACING; // Height of each row to fit the books better

const bookSpineThemes = {
  spooky: [
    { id: 'spooky-1', backgroundImage: 'url(/spines/spooky-1.png)' },
    { id: 'spooky-2', backgroundImage: 'url(/spines/spooky-2.png)' },
    { id: 'spooky-3', backgroundImage: 'url(/spines/spooky-3.png)' },
    { id: 'spooky-4', backgroundImage: 'url(/spines/spooky-4.png)' },
    { id: 'spooky-5', backgroundImage: 'url(/spines/spooky-5.png)' },
    { id: 'spooky-6', backgroundImage: 'url(/spines/spooky-6.png)' },
    { id: 'spooky-7', backgroundImage: 'url(/spines/spooky-7.png)' },
    { id: 'spooky-8', backgroundImage: 'url(/spines/spooky-8.png)' },
    { id: 'spooky-9', backgroundImage: 'url(/spines/spooky-9.png)' },
    { id: 'spooky-10', backgroundImage: 'url(/spines/spooky-10.png)' },
  ],
  soft: [
    { id: 'soft-1', backgroundImage: 'url(/spines/soft-1.png)' },
    { id: 'soft-2', backgroundImage: 'url(/spines/soft-2.png)' },
    { id: 'soft-3', backgroundImage: 'url(/spines/soft-3.png)' },
    { id: 'soft-4', backgroundImage: 'url(/spines/soft-4.png)' },
    { id: 'soft-5', backgroundImage: 'url(/spines/soft-5.png)' },
    { id: 'soft-6', backgroundImage: 'url(/spines/soft-6.png)' },
    { id: 'soft-7', backgroundImage: 'url(/spines/soft-7.png)' },
    { id: 'soft-8', backgroundImage: 'url(/spines/soft-8.png)' },
    { id: 'soft-9', backgroundImage: 'url(/spines/soft-9.png)' },
    { id: 'soft-10', backgroundImage: 'url(/spines/soft-10.png)' },
    { id: 'soft-11', backgroundImage: 'url(/spines/soft-11.png)' },
    { id: 'soft-12', backgroundImage: 'url(/spines/soft-12.png)' },
    { id: 'soft-13', backgroundImage: 'url(/spines/soft-13.png)' },
    { id: 'soft-14', backgroundImage: 'url(/spines/soft-14.png)' },
  ],
  colorful: [
    { id: 'colorful-1', backgroundImage: 'url(/spines/colorful-1.png)' },
    { id: 'colorful-2', backgroundImage: 'url(/spines/colorful-2.png)' },
    { id: 'colorful-3', backgroundImage: 'url(/spines/colorful-3.png)' },
    { id: 'colorful-4', backgroundImage: 'url(/spines/colorful-4.png)' },
    { id: 'colorful-5', backgroundImage: 'url(/spines/colorful-5.png)' },
    { id: 'colorful-6', backgroundImage: 'url(/spines/colorful-6.png)' },
    { id: 'colorful-7', backgroundImage: 'url(/spines/colorful-7.png)' },
  ],
  fantasy: [
    { id: 'fantasy-1', backgroundImage: 'url(/spines/fantasy-1.png)' },
    { id: 'fantasy-2', backgroundImage: 'url(/spines/fantasy-2.png)' },
    { id: 'fantasy-3', backgroundImage: 'url(/spines/fantasy-3.png)' },
    { id: 'fantasy-4', backgroundImage: 'url(/spines/fantasy-4.png)' },
    { id: 'fantasy-5', backgroundImage: 'url(/spines/fantasy-5.png)' },
    { id: 'fantasy-6', backgroundImage: 'url(/spines/fantasy-6.png)' },
    { id: 'fantasy-7', backgroundImage: 'url(/spines/fantasy-7.png)' },
    { id: 'fantasy-8', backgroundImage: 'url(/spines/fantasy-8.png)' },
    { id: 'fantasy-9', backgroundImage: 'url(/spines/fantasy-9.png)' },
    { id: 'fantasy-10', backgroundImage: 'url(/spines/fantasy-10.png)' },
    { id: 'fantasy-11', backgroundImage: 'url(/spines/fantasy-11.png)' },
    { id: 'fantasy-12', backgroundImage: 'url(/spines/fantasy-12.png)' },
    { id: 'fantasy-13', backgroundImage: 'url(/spines/fantasy-13.png)' },
  ],
};

const App = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books'));
    if (savedBooks) {
      setBooks(savedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    const maxBooksFirstRow = 10;
    const maxBooksOtherRows = 14;
    
    if (books.length >= maxBooksFirstRow + 3 * maxBooksOtherRows) {
      setMessage('Cannot add any more books.');
      return;
    }

    const position = findNextPosition(books);
    const spineStyle = getRandomSpineStyle(book.theme);
    if (spineStyle) {
      setBooks([...books, { ...book, ...position, spineStyle, progress: 0 }]);
      setMessage('');
    } else {
      setMessage('Invalid theme selected.');
    }
  };

  const updateBookProgress = (index, progress) => {
    const newBooks = books.map((book, i) => (i === index ? { ...book, progress } : book));
    setBooks(newBooks);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    const reOrderedBooks = newBooks.map((book, i) => ({
      ...book,
      ...findNextPosition(newBooks.slice(0, i)),
    }));
    setBooks(reOrderedBooks);
    setMessage('');
  };

  const findNextPosition = (books) => {
    let initialLeft, initialTop, maxBooksPerRow;

    if (books.length < 10) {
      initialLeft = 200;
      initialTop = 104;
      maxBooksPerRow = 10;
    } else if (books.length < 24) {
      initialLeft = 160;
      initialTop = 190;
      maxBooksPerRow = 14;
    } else if (books.length < 38) {
      initialLeft = 160;
      initialTop = 295;
      maxBooksPerRow = 14;
    } else if (books.length < 52) {
      initialLeft = 160;
      initialTop = 400;
      maxBooksPerRow = 14;
    }

    const col = books.length % maxBooksPerRow;
    return { left: initialLeft + col * (BOOK_WIDTH + BOOK_SPACING), top: initialTop };
  };

  const getRandomSpineStyle = (theme) => {
    const spines = bookSpineThemes[theme];
    if (!spines) return null;
    return spines[Math.floor(Math.random() * spines.length)];
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Bookshelf books={books} onBookClick={setSelectedBook} />
        <BookForm addBook={addBook} />
        {message && <Message>{message}</Message>}
        {selectedBook !== null && (
          <Modal onClick={() => setSelectedBook(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <FullTitle>{books[selectedBook].fullTitle}</FullTitle>
              <p>Adjust your reading progress:</p>
              <Slider
                type="range"
                min="0"
                max="100"
                value={books[selectedBook].progress || 0}
                onChange={(e) => updateBookProgress(selectedBook, e.target.value)}
              />
              <ProgressValue>{books[selectedBook].progress || 0}%</ProgressValue>
              <CloseButton onClick={() => setSelectedBook(null)}>Close</CloseButton>
              <DeleteButton onClick={() => { deleteBook(selectedBook); setSelectedBook(null); }}>Delete</DeleteButton>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </DndProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Message = styled.p`
  color: red;
  margin-top: 10px;
`;

const Bookshelf = ({ books, onBookClick }) => {
  return (
    <ShelfContainer>
      <Shelf>
        {books.map((book, index) => (
          <Book
            key={index}
            style={{ ...book.spineStyle, left: `${book.left}px`, top: `${book.top}px` }}
            onClick={() => onBookClick(index)}
          >
            <BookTitle>{book.title}</BookTitle>
          </Book>
        ))}
      </Shelf>
    </ShelfContainer>
  );
};

const ShelfContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

const Shelf = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust this value to make the bookshelf taller */
  background-image: url('/bookshelf.jpg'); /* Ensure this path is correct */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Book = styled.div`
  width: ${BOOK_WIDTH}px;
  height: ${BOOK_HEIGHT}px; /* Adjust height */
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content */
  position: absolute;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => props.style.backgroundImage};
  margin: 0; /* Remove margin */
  padding: 0; /* Remove padding */
  cursor: pointer;
  overflow: hidden; /* Ensure text stays within the book spine */
`;

const BookTitle = styled.h3`
  font-size: 12px; /* Smaller font size for longer titles */
  margin: 0;
  padding: 0;
  transform: rotate(-90deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%) rotate(-90deg); /* Center and rotate */
  width: 100%; /* Ensure the width does not exceed the book width */
  text-align: center; /* Center the text */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
`;

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [fullTitle, setFullTitle] = useState('');
  const [theme, setTheme] = useState('spooky'); // Default to the first theme

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && theme) {
      addBook({ title, fullTitle, theme });
      setTitle('');
      setFullTitle('');
      setTheme('spooky'); // Reset to the default theme
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Book Spine Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Full Book Title"
        value={fullTitle}
        onChange={(e) => setFullTitle(e.target.value)}
      />
      <Select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {Object.keys(bookSpineThemes).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </Select>
      <Button type="submit">Add Book</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const openBook = keyframes`
  0% {
    transform: scale(0.9) rotateY(-90deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotateY(0deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: ${openBook} 0.6s ease-out;
`;

const FullTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Slider = styled.input`
  width: 80%;
  margin: 20px 0;
  -webkit-appearance: none;
  height: 5px;
  background: #ddd;
  outline: none;
  border-radius: 5px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
  ::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const ProgressValue = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    background-color: darkred;
  }
`;

export default App;
