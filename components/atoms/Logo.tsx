import Image from "next/image";
const Logo = () => {
  return (
    <Image
      src={"/cleantech.png"}
      alt="cleantech-logo"
      width={150}
      height={50}
      style={{ margin: "0" }}
    />
  );
};

export default Logo;
