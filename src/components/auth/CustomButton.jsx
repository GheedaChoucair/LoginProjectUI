import { Button } from "@mui/material";

const CustomButton = ({ type, title, onClick }) => {
  return (
    <Button
      type={type}
      variant="contained"
      sx={{
        backgroundColor: "#90ccb4",
        color: "black",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
