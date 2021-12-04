import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled, keyframes } from "@mui/system";

interface LoaderModel {
  name: string;
}

const swing = keyframes`
  from {transform: rotateZ(-45deg) rotateY(-30deg);}
  50%  {transform: rotateZ(-30deg) rotateY(-45deg);}
  to   {transform: rotateZ(-45deg) rotateY(-30deg);}
`;

const LightSaber = styled("div")`
  position: absolute;
  top: 50vh;
  left: 12.5vw;
  width: 75vw;
  animation: ${swing} 3s infinite;
`;

const Handle = styled("div")`
  width: 14vw;
  height: 1vw;
  background-color: #fff;
  top: 0.8vw;
  position: relative;
  z-index: 10;
`;

const Blade = styled(LinearProgress)`
  height: 0.7vw;
`;

function Loader({ name }: LoaderModel) {
  return (
    <LightSaber>
      <Handle />
      <Blade />
    </LightSaber>
  );
}

export default Loader;
