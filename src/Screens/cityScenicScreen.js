import React, { useState, useEffect, useContext } from "react";
import actionType from "../Constants/actionType";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { StateContext, DispatchContext } from "../Context/index";

import Header from "../Components/header";
import Aside from "../Components/aside";
import Footer from "../Components/footer";

const CityScenicScreen = (props) => {
  const [open, setOpen] = useState(false);
  const {
    cityscenicspot,
    requestdata: { loading },
  } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  // console.log(props.match.params.city);

  useEffect(() => {
    dispatch({ type: actionType.BEGIN_DATA_REQUEST });
    try {
      async function fetchData() {
        const { data } = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${props.match.params.city}?$top=30&$format=JSON`
        );
        dispatch({ type: actionType.SET_CITYSCENICSPOT_DATA, payload: data });
        dispatch({ type: actionType.SUCCESS_DATA_REQUEST });
      }
      fetchData();
      window.scrollTo(0, 0)
    } catch (error) {
      dispatch({ type: actionType.FAIL_DATA_REQUEST, payload: error });
    }
  }, [props.match.params.city, dispatch]);

  return (
    <>
      {loading ? (
        <div className="grid-container">
          <Header open={open} setOpen={setOpen}></Header>
          <Aside open={open} setOpen={setOpen}></Aside>
          <main className="main"></main>
          <Footer></Footer>
        </div>
      ) : (
        <div className="grid-container">
          <Header open={open} setOpen={setOpen}></Header>
          <Aside open={open} setOpen={setOpen}></Aside>
          <main className="main">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
            >
              <Masonry>
                {cityscenicspot.map((scenic) => (
                  <div className="scenic">
                    {scenic.Picture.PictureUrl1 === undefined ? (
                      <div></div>
                    ) : (
                      <img
                        className="scenicImg"
                        src={scenic.Picture.PictureUrl1}
                        alt=""
                      />
                    )}
                    {scenic.Name === undefined ? (
                      <div></div>
                    ) : (
                      <div className="scenicName">{scenic.Name}</div>
                    )}
                    {scenic.Description === undefined ? (
                      <div></div>
                    ) : (
                      <div className="scenicDescription">
                        {scenic.Description}
                      </div>
                    )}
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </main>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default CityScenicScreen;
