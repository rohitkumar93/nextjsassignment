import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import Favorite from "@mui/icons-material/Favorite";

export default function LikeButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="like"
      selected={selected}
      className="like-button"
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <Favorite />
    </ToggleButton>
  );
}
