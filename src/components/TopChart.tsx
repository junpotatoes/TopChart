import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchTop100 } from '../api/api';
import { Link } from 'react-router-dom';
import * as S from '../styles/TopChart.style';
import { Track } from '../api/api';

const TopChart = ({}) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [isInitialOrder, setIsInitialOrder] = useState(true);

  useEffect(() => {
    const getTop100 = async () => {
      const tracks = await fetchTop100();
      setTracks(tracks);
    };
    getTop100();
  }, []);

  const filteredTracks = useCallback(
    () =>
      tracks.filter((track) =>
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [tracks, searchTerm]
  );

  const sortedTracks = useMemo(() => {
    if (isInitialOrder) {
      return [...filteredTracks()];
    } else {
      return [...filteredTracks()].sort((a, b) =>
        isAscendingOrder
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }
  }, [filteredTracks, isAscendingOrder, isDescendingOrder, isInitialOrder]);

  return (
    <S.Top100Container>
      <S.Top100Title>Top 100</S.Top100Title>
      <S.SearchBarContainer>
        <S.SearchBar
          type="text"
          placeholder="노래를 검색해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </S.SearchBarContainer>

      {sortedTracks.map((track) => (
        <Link to={`/track/${track.id}`} key={track.id}>
          <S.TrackContainer key={track.id}>
            <img src={track.image} alt={track.title} width={80} height={80} />
            <S.TrackInfo>
              <S.TrackTitle>{track.title}</S.TrackTitle>
              <S.TrackArtist>{track.artist}</S.TrackArtist>
            </S.TrackInfo>
          </S.TrackContainer>
        </Link>
      ))}
    </S.Top100Container>
  );
};

export default TopChart;
