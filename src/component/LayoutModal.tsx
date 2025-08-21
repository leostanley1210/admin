import React from "react";
import Modal from "@mui/material/Modal";
import { Typography, Button } from "@mui/material";

interface LayoutModalProps {
  open: boolean;
  handleClose: () => void;
  handleSignOutConfirmation: () => void;
}

const LayoutModal: React.FC<LayoutModalProps> = ({
  open,
  handleClose,
  handleSignOutConfirmation,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="!flex !items-center !justify-center"
    >
      <div className="p-8 rounded-lg shadow-lg overflow-y-auto  m-4 bg-white flex flex-col justify-center w-[80vw] md:w-[50vw] lg:w-100 items-center">
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          Are you sure you want to Sign Out?
        </Typography>
        <div className="flex flex-row justify-around items-center w-full">
          <Button
            size="large"
            onClick={handleSignOutConfirmation}
            variant="contained"
          >
            Yes, Sign Out{" "}
          </Button>
          <Button variant="text" onClick={handleClose}>
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LayoutModal;
