import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as S from '../styles/TrackDetail.style';
import { Track } from '../api/api';

const TrackDetail = () => {
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

  if (!track) {
    return <div>Loading...</div>;
  }

  return <div></div>;
};

export default TrackDetail;
