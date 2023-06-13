import Dialog, { DialogProps } from "@mui/material/Dialog";
import ic_close from "@mfc/assests/icons/ic_close.svg";
import Image from "next/image";

interface BasicDialogProps extends DialogProps {
  title?: string;
  subTitle?: string;
  open: boolean;
  children?: React.ReactNode;
  handleClose?: () => void;
}

const BasicDialog = (props: BasicDialogProps) => {
  const { title, subTitle, open, handleClose, children, maxWidth } = props;
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth={maxWidth || "sm"}
    >
      <div className="py-[24px]" style={{ background: 'linear-gradient(180deg, #EFEEFC 0%, #C9F2E9 100%)' }}>
        {handleClose && (
          <div
            className="w-full flex justify-end mb-[6px] px-[24px] cursor-pointer"
            onClick={handleClose}
          >
            <Image src={ic_close} alt="" width={16} height={16} />
          </div>
        )}
        {title && (
          <div className="w-full flex flex-col items-center justify-between px-8">
            <p
              className={`w-full text-blue-053865 text-30-40 text-center font-extrabold ${subTitle ? "mb-4" : "mb-[48px]"
                }`}
            >
              {title}
            </p>
            {subTitle && (
              <p className="text-neutral-5 text-16-24mb-8">{subTitle}</p>
            )}
          </div>
        )}
        <div className="px-8">{children}</div>
      </div>
    </Dialog>
  );
};

export default BasicDialog;
