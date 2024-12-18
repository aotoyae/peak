import { FormBtnProps } from "@/types/common";

const FormBtn: React.FC<FormBtnProps> = ({
  onClick,
  width,
  padding,
  color,
  text,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${width} rounded-lg ${padding} ${color}`}
    >
      {text}
    </button>
  );
};

export default FormBtn;
