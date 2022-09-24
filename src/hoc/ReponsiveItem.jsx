import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ReponsiveItem(props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const setWidth = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = setWidth;
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  if (screen.width < 768 && props.componentMobile) {
    // load component mobile
    return <props.componentMobile></props.componentMobile>;
  }
  // else load component thường
  return <props.component></props.component>;
}
