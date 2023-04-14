import axios from 'axios';

export type Track = {
  id: number;
  title: string;
  artist: string;
  image: string;
  previewUrl: string;
};

export const BASE_URL =
  'https://itunes.apple.com/us/rss/topsongs/limit=100/json';

export const fetchTop100 = async (): Promise<Track[]> => {
  try {
    const response = await axios.get(BASE_URL);
    const tracks = response.data.feed.entry.map((entry: any) => ({
      id: entry.id.attributes['im:id'],
      title: entry['im:name'].label,
      artist: entry['im:artist'].label,
      image: entry['im:image'][2].label
    }));
    return tracks;
  } catch (error) {
    console.error(error);
    return [];
  }
};
