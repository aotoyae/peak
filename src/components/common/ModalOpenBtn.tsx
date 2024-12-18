import { ModalBtnProps } from "@/types/common";

const ModalOpenBtn: React.FC<ModalBtnProps> = ({
  onClick,
  width,
  padding,
  color,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${width} rounded ${padding} ${color}`}
    >
      {text}
    </button>
  );
};

export default ModalOpenBtn;
