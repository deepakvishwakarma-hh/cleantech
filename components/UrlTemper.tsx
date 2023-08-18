import { useRouter } from "next/router";
import { useEffect } from "react";

const UrlTemper = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("User messed with the parameters of the URL!");
    router.back();
  }, [router]);
  return null;
};

export default UrlTemper;
