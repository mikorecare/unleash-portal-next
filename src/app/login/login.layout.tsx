import blob_bg from "@/assets/sign-in-page/blob.png";
import upper_left_paw_path from "@/assets/sign-in-page/upper-left-paw-path.png";
import lower_right_paw_path from "@/assets/sign-in-page/lower-right-paw-path.png";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-unleash-blue h-full min-h-[100vh] flex justify-center items-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-unleash-blue-light w-[32rem] h-[32rem] rounded-full absolute -left-32 -bottom-32" />
        <img
          src={blob_bg.src}
          alt="background element"
          className="top-0 right-0 absolute h-[100vh]"
        />
        <img
          src={upper_left_paw_path.src}
          alt="background element"
          className="top-8 left-8 absolute opacity-[.18] w-36"
        />
        <img
          src={lower_right_paw_path.src}
          alt="background element"
          className="bottom-8 right-80 absolute opacity-[.18] w-36"
        />

        {children}
      </div>
    </div>
  );
};

export default LoginLayout
