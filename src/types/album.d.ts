type ShareAlbum = {
  additional: { thumbnail: Thumbnail };
  create_time: number;
  end_time: number;
  freeze_album: boolean;
  id: number;
  item_count: number;
  name: string;
  owner_user_id: number;
  passphrase: string;
  shared: boolean;
  sort_by: string;
  sort_direction: string;
  start_time: number;
  temporary_shared: boolean;
  type: string;
  version: number;
  thumbnail: string;
};

type Thumbnail = {
  cache_key: string;
  m: string;
  preview: string;
  sm: string;
  unit_id: number;
  xl: string;
};
