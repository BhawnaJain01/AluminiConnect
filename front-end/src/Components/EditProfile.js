import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdModeEditOutline } from "react-icons/md";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        position: "absolute",
        right: "3%",
        top: "3%",
      }}
    >
      <Button onClick={handleOpen}>
        {" "}
        <MdModeEditOutline
          style={{ width: "30px", height: "30px", color: "black" }}
        />{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ marginLeft: "210px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="">
              <TextField
                style={{ marginRight: "20px", marginLeft: "20px" }}
                id="outlined-basic"
                label="Work"
                variant="outlined"
              />

              <TextField
                style={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Currently Doing"
                variant="outlined"
              />

              <TextField
                style={{ marginRight: "20px", marginLeft: "20px" }}
                id="outlined-basic"
                label="Tag Line"
                variant="outlined"
              />

              <TextField
                style={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Bio"
                variant="outlined"
              />
              <TextField
                style={{ marginRight: "20px", marginLeft: "20px" }}
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
              <TextField
                style={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Further Plans"
                variant="outlined"
              />
              <TextField
                style={{ marginRight: "20px", marginLeft: "20px" }}
                id="outlined-basic"
                label="Qualification"
                variant="outlined"
              />
              <TextField
                style={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
              />

              <Button
                style={{
                  marginLeft: "200px",
                  background: "#1A2632",
                  color: "#F2C61B",
                }}
                variant="contained"
              >
                Update
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
