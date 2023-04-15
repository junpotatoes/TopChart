import styled from 'styled-components';

export const TrackContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;
  grid-column: span 1;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 4px;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TrackTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const TrackArtist = styled.h3`
  font-size: 14px;
  margin: 0;
`;

export const Top100Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

export const Top100Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;

  button {
    padding: 8px;
    color: ${(props) => props.theme.black};
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 4px;
    background-color: ${(props) => props.theme.gray};
    margin-right: 5px;

    @media ${(props) => props.theme.mobile} {
      padding: 4px;
    }
  }
`;

export const SearchBar = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 200px;
  margin-right: 10px;

  @media ${(props) => props.theme.mobile} {
    padding: 4px;
  }
`;
