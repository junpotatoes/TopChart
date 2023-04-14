import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as S from '../styles/TrackDetail.style';
import { Track } from '../api/api';

const TrackDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    axios
      .get(`https://itunes.apple.com/lookup?id=${id}`)
      .then((response) => {
        const entry = response.data.results[0];
        setTrack({
          id: entry.trackId,
          title: entry.trackName,
          artist: entry.artistName,
          image: entry.artworkUrl100,
          previewUrl: entry.previewUrl
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const audioElement = useMemo(() => {
    return track ? <audio src={track.previewUrl} controls /> : null;
  }, [track]);

  const handleBackButtonClick = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <S.DetailPageContainer>
      <S.DetailPageContent>
        <S.DetailPageIconContainer>
          <div onClick={handleBackButtonClick}>
            <img src="/icons/back.png" alt="icon" width={40} height={40} />
          </div>
        </S.DetailPageIconContainer>
        <div>
          <img src={track.image} alt={track.title} width={300} height={300} />
        </div>
        <div>
          <h1>{track.title}</h1>
          <h2>{track.artist}</h2>
        </div>
        <div>{audioElement}</div>
      </S.DetailPageContent>
    </S.DetailPageContainer>
  );
};

export default TrackDetail;
