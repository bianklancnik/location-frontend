import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getalllocations } from "../../api/location";
import { LocationType } from "../../interfaces/location.interface";
import { ButtonCenterContainer } from "../../styles/Global.styled";
import { AlternativeButton } from "../common/Button.styled";
import { ImageGrid, ImageGridImg, ImageGridItem } from "../style/Home.styled";
import { EmptyGridItem } from "../style/Profile.styled";

const AllLocations = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [pages, setPages] = useState<number>(1);

  const getAllLocations = async () => {
    const limit: number = pages * 3;
    const result = await getalllocations(`/location?limit=${limit}`);
    if (result.request) {
      const data = result.request.response;
      const response = JSON.parse(data);
      setLocations(response);
    }
  };

  const showAllLocations = () => {
    if (Object.keys(locations).length !== 0) {
      return locations.map((location) => {
        return (
          <ImageGridItem
            key={location.id}
            onClick={() => {
              viewLocation(location.id);
            }}
          >
            <ImageGridImg alt="" src={location.img} />
          </ImageGridItem>
        );
      });
    } else {
      return <EmptyGridItem>No locations to display</EmptyGridItem>;
    }
  };

  const viewLocation = async (id: number) => {
    navigate("/location", {
      state: { id: id },
    });
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  useEffect(() => {
    getAllLocations();
  }, [pages]);

  const addPage = () => {
    setPages(pages + 1);
  };

  return (
    <>
      <ImageGrid>{showAllLocations()}</ImageGrid>
      <ButtonCenterContainer>
        <AlternativeButton type="button" onClick={addPage}>
          LOAD MORE
        </AlternativeButton>
      </ButtonCenterContainer>
    </>
  );
};

export default AllLocations;
