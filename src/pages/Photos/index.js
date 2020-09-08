import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { getAllPhotos } from "../../redux/reducers/photoReducer";
import { PhotosColumn, PhotosRow } from "./style";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [photosPerPage, setPhotosPerPage] = useState(40);

  const dispatch = useDispatch();
  const history = useHistory();

  const { allPhotos } = useSelector((state) => state.photo);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const fetchedPhotos = await dispatch(getAllPhotos());
      setPhotos(fetchedPhotos.payload.data);
      setLoading(false);
    };

    if (!allPhotos.length) {
      fetchPhotos();
    }
  }, [dispatch, allPhotos]);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <PhotosRow>
        {currentPhotos.map((photo) => (
          <PhotosColumn
            key={photo.id}
            onClick={() => {
              history.push(`/photos/${photo.id}`);
            }}
          >
            <img alt={photo.title} src={photo.thumbnailUrl} />
            <h6>
              <b>Title:</b> {photo.title}
            </h6>
          </PhotosColumn>
        ))}
      </PhotosRow>

      <Pagination
        itemsPerPage={photosPerPage}
        totalItems={allPhotos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Photos;
