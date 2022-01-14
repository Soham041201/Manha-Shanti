import { withRouter } from "react-router";
import image1 from "../images/img1.jpg";
import { Box } from "@mui/material";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("tab", "home");
  }, []);

  return (
    <div class="flex">
      <div className="w-1/2">
        <h1 className="font-bold break-normal text-left text-7xl text-white  ml-20 mt-10 p-0.5">
          Manha
          <br />
          Shanti
          <hr class="mt-3" id="line" />
        </h1>
        <p className=" text-white text-left ml-20 p-0.5 text-xl">
          Emotional and mental health is important because it’s a vital part of
          your life and impacts your thoughts, behaviors and emotions. Being
          healthy emotionally can promote productivity and effectiveness in
          activities like work, school or caregiving. It plays an important part
          in the health of your relationships, and allows you to adapt to
          changes in your life and cope with adversity.{" "}
        </p>
      </div>
      <div className="w-1/2">
        <Box sx={{ borderRadius: "100%", ml: 10 }}>
          <img
            src={image1}
            className="rounded"
            alt="PeaceImage"
            height="100px"
            width="500px"
          />
        </Box>
      </div>
    </div>
  );
};

export default withRouter(Home);
