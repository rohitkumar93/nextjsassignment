import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

// function to generate random number for comments
function randomNum() {
  return Math.ceil(Math.random() * 20);
}

export default function CommentButton() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={5}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        color="secondary"
      >
        <CommentIcon />
      </StyledBadge>
    </IconButton>
  );
}
