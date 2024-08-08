import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <Container>
      <Title>Reading Progress Tracker</Title>
      <Bookshelf books={books} />
      <BookForm addBook={addBook} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Bookshelf = ({ books }) => {
  return (
    <ShelfContainer>
      <Shelf>
        {books.map((book, index) => (
          <Book key={index} color={book.color}>
            <Title>{book.title}</Title>
            <ProgressBar>
              <Progress width={book.progress} />
            </ProgressBar>
            <ProgressText>{book.progress}% read</ProgressText>
          </Book>
        ))}
      </Shelf>
    </ShelfContainer>
  );
};

const ShelfContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-image: url('/bookshelf.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  height: auto;
`;

const Book = styled.div`
  width: 80px;
  padding: 10px;
  background-color: ${(props) => props.color};
  color: #fff;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #444;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 10px;
  background-color: #4caf50;
`;

const ProgressText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && progress) {
      addBook({ title, progress, color });
      setTitle('');
      setProgress('');
      setColor('#ffffff');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Progress (%)"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
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

export default App;