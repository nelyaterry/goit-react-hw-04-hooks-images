import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import fetchImagine from "../../servises/api-service";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Download from "../Loader/Loader";
import { Gallery, Content } from "./ImageGallery.styled";

const ImageGallery = ({ request }) => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("idle");
  const [page, setPage] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (request === "") {
      return;
    }

    setImages([]);
    setPage(1);
    setStatus("pending");

    fetchImagine(request, page).then((response) => {
      if (response.data.total === 0) {
        setStatus("regected");
      } else {
        setImages(response.data.hits);
        setTotal(response.data.total);
        setStatus("resolved");
      }
    });
  }, [request]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    fetchImagine(request, page)
      .then((response) => {
        setImages((imges) => [...imges, ...response.data.hits]);
      })
      .then(page > 1 && smoothScroll);
  }, [page]);

  const smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  const onTogleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const onOpenModal = (url) => {
    setImageUrl(url);

    onTogleModal();
  };

  if (status === "idle") {
    return (
      <Content>
        <h1>Введите запрос</h1>
      </Content>
    );
  }

  if (status === "pending") {
    return <Download />;
  }

  if (status === "resolved") {
    return (
      <Content>
        <Gallery>
          <ImageGalleryItem images={images} onClick={onOpenModal} />
        </Gallery>
        {total !== images.length && (
          <Button onClick={onLoadMore}>Load more</Button>
        )}

        {showModal && (
          <Modal onClick={onTogleModal}>
            <img src={imageUrl} alt="" />
          </Modal>
        )}
      </Content>
    );
  }

  if (status === "regected") {
    return (
      <Content>
        <h1>По вашему запросу нет данных</h1>
      </Content>
    );
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  request: PropTypes.string,
};
