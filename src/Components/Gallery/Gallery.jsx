import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
  const images = [
    { id: "1", imageName: "1.jpg", tag: "self" },
    { id: "2", imageName: "2.jpg", tag: "self" },
    { id: "3", imageName: "3.jpg", tag: "self" },
    { id: "4", imageName: "4.jpg", tag: "self" },
    { id: "5", imageName: "5.jpg", tag: "self" },
    { id: "6", imageName: "6.jpg", tag: "self" },
    { id: "7", imageName: "7.jpg", tag: "self" },
    { id: "8", imageName: "8.jpg", tag: "self" },
    { id: "9", imageName: "9.jpg", tag: "self" },
    { id: "10", imageName: "10.jpg", tag: "mom" },
    { id: "11", imageName: "11.jpg", tag: "friends" },
    { id: "12", imageName: "12.jpg", tag: "friends" },
    { id: "13", imageName: "13.jpg", tag: "self" },
    { id: "14", imageName: "14.jpg", tag: "friends" },
  ];

  const [tag, setTag] = useState("self");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(() => images.filter((image) => image.tag === tag));
  }, [tag]);

  const StyledTagButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
    width: 90vw;
    margin: 0 auto;
    padding: 6px;

    & > * {
      color: white;
      outline: none;
      border: none;
      background-color: rgb(83, 6, 6);
      padding: 8px 15px;
      width: 6rem;
      border-radius: 20px;

      &:hover {
        background-color: orangered;
      }
    }

    @media (max-width: 760px) {
      max-width: 450px;
    }

    @media (min-width: 761px) {
      max-width: 550px;
    }
  `;

  const StyledImageDisplay = styled.div`
    width: 91vw;
    margin: auto;
    img {
      width: 100%;
    }

    @media (max-width: 660px) {
      -moz-column-count: 1;
      -webkit-column-count: 1;
      column-count: 1;
      -moz-column-width: 100%;
      -webkit-column-width: 100%;
      column-width: 100%;
    }

    @media screen and (min-width: 661px) and (max-width: 960px) {
      -moz-column-count: 2;
      -webkit-column-count: 2;
      column-count: 2;
      // -moz-column-width: 50%;
      // -webkit-column-width: 50%%;
      // column-width: 50%;
    }

    @media (min-width: 961px) {
      -moz-column-count: 3;
      -webkit-column-count: 3;
      column-count: 3;
      -moz-column-width: 33.3%;
      -webkit-column-width: 33.3%;
      column-width: 33.3%;
    }
  `;

  return (
    <>
      <StyledTagButtons>
        <TagButton setTag={setTag} name="all" />
        <TagButton setTag={setTag} name="mom" />
        <TagButton setTag={setTag} name="friends" />
        <TagButton setTag={setTag} name="self" />
      </StyledTagButtons>
      <SRLWrapper>
        <StyledImageDisplay>
          {filteredImages.map((image) => (
            <div>
              <a href={`/imgages/${image.imageName}`}>
                <img src={`/images/${image.imageName}`} alt="" />
              </a>
            </div>
          ))}
        </StyledImageDisplay>
      </SRLWrapper>
    </>
  );
}

const TagButton = ({ name, setTag }) => {
  return (
    <button
      onClick={() => {
        setTag(name);
      }}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
