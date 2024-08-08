import React from 'react';
import styled from 'styled-components';

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
  min-height: 200px; /* Ensure a minimum height */
  height: auto; /* Adjust height based on content */
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

const Title = styled.h3`
  font-size: 14px;
  margin-bottom: 5px;
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

export default Bookshelf;
